import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { Restaurante } from '../../../domain/restaurante/restaurante';


import * as $ from "jquery";


@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.page.html',
  styleUrls: ['./cards-list.page.scss'],
})
export class CardsListPage implements OnInit {

  public restaurante: Restaurante;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public _alertCtrl: AlertController,
    private router: Router,
  ) { 

    this.route.queryParams.subscribe(params => {
      this.restaurante = new Restaurante(null, null, null, null, null, null);
      this.restaurante.id = params["id"];
      this.restaurante.nome = params ["nome"];
      this.restaurante.telefone = params["telefone"];
      this.restaurante.imgurl = params["imgurl"];
      this.restaurante.imgtopo = params["imgtopo"];
      this.restaurante.endereco = params["endereco"];      
    });

  }

  ngOnInit() {

    if(sessionStorage.getItem('flagLogado')!= "sim"){
      this.goToLogin();
    }

  }

  clearCart(){
    sessionStorage.removeItem('cart');
    this.seleciona(this.restaurante);
  }

  goToLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  goToCart(restaurante){
		console.log('Entrou na Action seleciona');
		console.log("\n endereco: " + restaurante.endereco + "\n");
		let navigationExtras: NavigationExtras = {
						queryParams: {
							"id" : restaurante.id,
							"nome" : restaurante.nome,
							"telefone" : restaurante.telefone,
							"imgurl" : restaurante.imgurl,
							"imgtopo" : restaurante.imgtopo,
							"endereco" : restaurante.endereco
						}
			};
			console.log(JSON.stringify(navigationExtras));
			this.router.navigate(['/order-cart'],  navigationExtras);
			//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
  }
  
  seleciona(restaurante){
		console.log('Entrou na Action seleciona');
		console.log("\n endereco: " + restaurante.endereco + "\n");
		let navigationExtras: NavigationExtras = {
            queryParams: {
				      "id" : restaurante.id,
				      "nome" : restaurante.nome,
				      "telefone" : restaurante.telefone,
				      "imgurl" : restaurante.imgurl,
				      "imgtopo" : restaurante.imgtopo,
				      "endereco" : restaurante.endereco
            }
		};
		console.log(JSON.stringify(navigationExtras));
		this.router.navigate(['/order-end'],  navigationExtras);
		//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
  }

  submit(){

    /* let loader = this._loadingCtrl.create({
       content: 'Realizando pagamento. Por favor, aguarde ...'
     });
     loader.present();*/

     var bill_itemsID = new Array ();
     var bill_itemsAmout = new Array ();

     //Variáveis para gerar conta e efetuar pagamento
     var payment_method_code = "credit_card";
     //var payment_company_code = this.radioData;
     var payment_company_code = "mastercard";//this.radioData;

     //Variáveis para GETUSER, POSTUSER
     var nameUser = sessionStorage.getItem('usuarioName');
     var emailUser = sessionStorage.getItem('usuarioLogado');
     var jsonDataUser;
     var customer_id;
     var dataPostUser = JSON.stringify({name: nameUser, email: emailUser});
     
     //Variáveis para o GETPRODUCT, POSTPRODUCT E PUTPRODUCT
     var nameProduct;
     var priceProduct;
     var dataPostProduct;
     var jsonDataProduct;
     var dataPutProduct;
     var length;
     var quantidadeProdutos;
    
     //Variáveis para o POSTBILL
     var bill_items = new Array();
     var dataPostBill;
     //var holder_name = this.pagamento.holder_name;
     var holder_name = "Ana Karolina T Fernandes"//this.pagamento.holder_name;
     //var card_cvv = this.pagamento.card_cvv;
     var card_cvv = "123";//this.pagamento.card_cvv;
     //var card_expiration =  this.pagamento.card_expiration.substring(5) + "/" + this.pagamento.card_expiration.substring(2,4);
     var card_expiration =  "12/23";//this.pagamento.card_expiration.substring(5) + "/" + this.pagamento.card_expiration.substring(2,4);
     //var card_number = this.pagamento.card_number; //5555 5555 5555 5557
     var card_number = "5555555555555557"//this.pagamento.card_number;
     var jsonDataBills;
     
     //Variáveis para o e-mail de confirmação
     var dataEmail;
     var confUrl;
     var confirmation;

    
     //GET USER BY EMAIL ################################################################
     console.log("COMECANDO A BUSCA PELO CLIENTE NA VINDI: " + nameUser + ", " + emailUser  + "\n\n\n");
     $.ajax({
       method: "POST",
       async: false,
       url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/getUserApiVindi.php",
       data: dataPostUser
     }).done(function(data) {
         console.log("RETORNO DA BUSCA PELO CLIENTE NA VINDI: " + data + "\n\n\n");

         jsonDataUser = JSON.parse(data);
         data = "";
           
         if(jsonDataUser.customers.length != 0){
           customer_id = jsonDataUser.customers[0].id;
           
           jsonDataUser.customers.forEach(element => {
             if(emailUser == element.email){
               console.log(element.email + " Achei o Usuário, então preciso buscar produtos pra saber se já estão cadastrados\n");

               this.cart = JSON.parse(sessionStorage.getItem('cart'));

               for (var i = 0; i<this.cart.pedidos.length; i++) {

                 if(this.cart.pedidos[i]['cardapio'] != null){
                     nameProduct = (this.cart.pedidos[i]['cardapio'].nome).replace(/\s/g, "");
                     priceProduct = this.cart.pedidos[i]['cardapio'].preco;
                 }
                 else{
                     nameProduct = (this.cart.pedidos[i]['cardapioGeral'].nome).replace(/\s/g, "");
                     priceProduct = this.cart.pedidos[i]['cardapioGeral'].preco;
                 }
                 quantidadeProdutos = this.cart.pedidos[i].quantidade;
                 dataPostProduct = JSON.stringify({name: nameProduct, status: "active", price: priceProduct, schema_type: "per_unit"});
                 
                 //GET PRODUTOS BY NAME ############################################################
                 console.log("COMECANDO A BUSCA PELOS PRODUTOS NA VINDI: " + nameProduct + ", " + priceProduct  + "\n\n\n");
                 $.ajax({
                   method: "POST",
                   async: false,
                   url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/getProductApiVindi.php",
                   data: dataPostProduct
                 }).done(function(data) {
                     console.log("RETORNO DA BUSCA PELO PRODUTO NA VINDI: " + data + "\n\n\n");
                
                     jsonDataProduct = JSON.parse(data);
                     data = "";
                             
                     if(jsonDataProduct.products.length !== 0){

                       jsonDataProduct.products.forEach(element => {

                         length = bill_itemsID.push(element.id);
                         length = bill_itemsAmout.push(priceProduct * quantidadeProdutos);

                         //console.log("bill_itemsID 1 : " + bill_itemsID[i] + "\n");
                         //console.log("this.cart.pedidos[i].quantidade : " + quantidadeProdutos + "\n");

                         if(priceProduct != element.pricing_schema.price+"0"){               

                           dataPutProduct = JSON.stringify({id: element.id, name: nameProduct, status: 'active', price: priceProduct, schema_type: 'per_unit'});
                           
                           //PUT Do PRODUTO #######################################################################
                           console.log("PRODUTO COM VALOR DESATUALIZADO, PRECISAMOS ATUALIZAR: " + element.name + "\n\n\n");
                           $.ajax({
                             method: "POST",
                             async: false,
                             url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/putProductApiVindi.php",
                             dataType: "text",
                             data: dataPutProduct
                           }).done(function(data) {
 
                               jsonDataProduct = JSON.parse(data);
                               data = "";

                               console.log("PRODUTO ATUALIZADO COM SUCESSO: " + element.name + "\n\n\n");
 
                             }).fail(function(request, status, error) {
                                 console.log(error);
                                 alert('Erro ao atualizar produto para pagamento');
                             });
                         }          
      
                       });
         
                     }
                     else{
                       
                       // POST PRODUCT ##########################################################
                       console.log("NÃO ENCONTROU O PRODUTO, FAZER O CADASTRO DO MESMO: " + nameProduct + "\n\n\n");
                                           
                       $.ajax({
                         method: "POST",
                         async: false,
                         url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/postProductApiVindi.php",
                         dataType: "text",
                         data: dataPostProduct
                       }).done(function(data) {

                         console.log("PRODUTO CADASTRADO COM SUCESSO: " + nameProduct + "\n\n\n");
                         jsonDataProduct = JSON.parse(data);
                         data = "";
                         length = bill_itemsID.push(jsonDataProduct.product.id);
                         length = bill_itemsAmout.push(priceProduct * quantidadeProdutos);


                       }).fail(function(request, status, error) {
                           console.log(error);
                           alert('Erro ao cadastrar produto para pagamento');
                       });
                               
                     }

                 }).fail(function(request, status, error) {
                     console.log(error);
                     alert('Erro ao buscar produto para pagamento');
                 });

               }
               
               for (var x = 0; x<length; x++) {
                
                bill_items.push(new Object({product_id: bill_itemsID[x], amount: bill_itemsAmout[x]}));

               }
               
               dataPostBill = JSON.stringify({customer_id: customer_id, payment_method_code: payment_method_code, bill_items: bill_items , holder_name: holder_name, card_expiration: card_expiration, card_number: card_number, card_cvv: card_cvv, payment_company_code: payment_company_code});
               console.log(dataPostBill);
               //POST Da FATURA #######################################################################
               console.log("TENDO CLIENTE E PRODUTOS DEVIDAMENTE CADASTRADOS, GERAR A FATURA: ");
               $.ajax({
                 method: "POST",
                 url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/postBillApiVindi.php",
                 dataType: "text",
                 async: false,
                 data: dataPostBill
               }).done(function(data, statusText, xhr) {
                 console.log(data);

                 jsonDataBills = JSON.parse(data);
                 
                 if(jsonDataBills.bill.status == "paid"){
                   //console.log(jsonDataBills.bill.status + "\n\n"); 

                   confUrl = jsonDataBills.bill.url;

                   dataEmail = JSON.stringify({customer_id: customer_id, name: nameUser, email: emailUser, url: confUrl, bill_items: bill_items });
                   confirmation = true;

                   console.log("DEU CERTO, ENVIAR E-MAIL PARA O RESPONSÁVEL PELO PELA VINDI \n\n\n");
                   $.ajax({
                     method: "POST",
                     //async: false,
                     url: "https://viniciusvillar.000webhostapp.com/sendgridVite/enviar_email2.php",
                     dataType: "text",
                     data: dataEmail
                   }).done(function(data) {
                      console.log(data);
                       //jsonDataProduct = JSON.parse(data);
                       data = "";

                       console.log("\nEMAIL ENVIADO COM SUCESSO \n\n\n"); //5555 5555 5555 5557

                     }).fail(function(request, status, error) {
                         console.log(error);
                         console.log(status);
                         //alert('Erro ao enviar e-mail');
                     });

                     //loader.dismiss();

                 }
                 else{
                   console.log("ERROOOOOOOOOOOO")
                 }
                 data = "";
                 
                // goToConfirmation();

               }).fail(function(request, status, error) {
                 console.log(error);
                 //console.log(request.responseText);
                 alert('Erro ao cadastrar fatura de pagamento');
               });
          
             }
             else{
               console.log("###### Retornou valor de usuário, mas não são os mesmos. \n\n\n");

             }

           });
         }
         else{
           console.log("NÃO EXISTE USUÁRIO, FAZER O CADASTRO DO MESMO: " + nameUser + "\n\n\n");

            //  POST
               $.ajax({
                   method: "POST",
                   async: false,
                   url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/postUserApiVindi.php",
                   dataType: "text",
                   data: dataPostUser
                 }).done(function(data) {
                     console.log(data);

                     jsonDataUser = JSON.parse(data);
                     customer_id = jsonDataUser.customer.id;
                     data = "";

                     this.cart = JSON.parse(sessionStorage.getItem('cart'));

                     for (var j = 0; j<this.cart.pedidos.length; j++) {

                       if(this.cart.pedidos[j]['cardapio'] != null){
                         nameProduct = (this.cart.pedidos[j]['cardapio'].nome).replace(/\s/g, "");
                         priceProduct = this.cart.pedidos[j]['cardapio'].preco;
                     }
                     else{
                         nameProduct = (this.cart.pedidos[j]['cardapioGeral'].nome).replace(/\s/g, "");
                         priceProduct = this.cart.pedidos[j]['cardapioGeral'].preco;
                     }
                       quantidadeProdutos = this.cart.pedidos[j].quantidade;
                       dataPostProduct = JSON.stringify({name: nameProduct, status: "active", price: priceProduct, schema_type: "per_unit"});

                       //GET PRODUTOS BY NAME ############################################################
                       console.log("COMECANDO A BUSCA PELOS PRODUTOS NA VINDI: " + nameProduct + ", " + priceProduct  + "\n\n\n");
                       $.ajax({
                         method: "POST",
                         async: false,
                         url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/getProductApiVindi.php",
                         data: dataPostProduct
                       }).done(function(data) {
                           console.log("RETORNO DA BUSCA PELO PRODUTO NA VINDI: " + data + "\n\n\n");
                     
                           jsonDataProduct = JSON.parse(data);
                           data = "";
                                   
                           if(jsonDataProduct.products.length !== 0){

                             jsonDataProduct.products.forEach(element => {

                               length = bill_itemsID.push(element.id);
                               length = bill_itemsAmout.push(priceProduct*quantidadeProdutos);

                               //console.log("bill_itemsID 1 : " + bill_itemsID[i] + "\n");

                               if(priceProduct != element.pricing_schema.price+"0"){               

                                 dataPutProduct = JSON.stringify({id: element.id, name: nameProduct, status: 'active', price: priceProduct, schema_type: 'per_unit'});
                                 
                                 //PUT Do PRODUTO #######################################################################
                                 console.log("PRODUTO COM VALOR DESATUALIZADO, PRECISAMOS ATUALIZAR: " + element.name + "\n\n\n");
                                 $.ajax({
                                   method: "POST",
                                   async: false,
                                   url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/putProductApiVindi.php",
                                   dataType: "text",
                                   data: dataPutProduct
                                 }).done(function(data) {
       
                                     jsonDataProduct = JSON.parse(data);
                                     data = "";

                                     console.log("PRODUTO ATUALIZADO COM SUCESSO: " + element.name + "\n\n\n");
       
                                   }).fail(function(request, status, error) {
                                       console.log(error);
                                       alert('Erro ao atualizar produto para pagamento');
                                   });
                               }          
           
                             });
               
                           }
                           else{
                             
                             // POST PRODUCT ##########################################################
                             console.log("NÃO ENCONTROU O PRODUTO, FAZER O CADASTRO DO MESMO: " + nameProduct + "\n\n\n");
                                                 
                             $.ajax({
                               method: "POST",
                               async: false,
                               url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/postProductApiVindi.php",
                               dataType: "text",
                               data: dataPostProduct
                             }).done(function(data) {

                               console.log("PRODUTO CADASTRADO COM SUCESSO: " + nameProduct + "\n\n\n");
                               jsonDataProduct = JSON.parse(data);
                               data = "";
                               length = bill_itemsID.push(jsonDataProduct.product.id);
                               length = bill_itemsAmout.push(priceProduct * quantidadeProdutos);


                             }).fail(function(request, status, error) {
                                 console.log(error);
                                 alert('Erro ao cadastrar produto para pagamento');
                             });
                                     
                           }

                       }).fail(function(request, status, error) {
                           console.log(error);
                           alert('Erro ao buscar produto para pagamento');
                       });

                     }
                     
                     for (var y = 0; y<length; y++) {
                     
                       bill_items.push(new Object({product_id: bill_itemsID[y], amount: bill_itemsAmout[y]}));

                     }
                     
                     dataPostBill = JSON.stringify({customer_id: customer_id, payment_method_code: payment_method_code, bill_items: bill_items , holder_name: holder_name, card_expiration: card_expiration, card_number: card_number, card_cvv: card_cvv, payment_company_code: payment_company_code});
                     console.log(dataPostBill);
                     //POST Da FATURA #######################################################################
                     console.log("TENDO CLIENTE E PRODUTOS DEVIDAMENTE CADASTRADOS, GERAR A FATURA: ");
                     $.ajax({
                       method: "POST",
                       async: false,
                       url: "https://viniciusvillar.000webhostapp.com/phpServerApiVindi/postBillApiVindi.php",
                       dataType: "text",
                       data: dataPostBill
                     }).done(function(data) {
                       console.log(data);
         
                       jsonDataBills = JSON.parse(data);

                       if(jsonDataBills.bill.status == "paid"){
                         //console.log(jsonDataBills.bill.status + "\n\n"); 
     
                         confUrl = jsonDataBills.bill.url;
     
                         dataEmail = JSON.stringify({customer_id: customer_id, name: nameUser, email: emailUser, url: confUrl, bill_items: bill_items });
                         confirmation = true;
                         
                         console.log("DEU CERTO, ENVIAR E-MAIL PARA O RESPONSÁVEL PELO PELA VINDI \n\n\n");
                         
                         $.ajax({
                           method: "POST",
                           //async: false,
                           url: "https://viniciusvillar.000webhostapp.com/sendgridVite/enviar_email2.php",
                           dataType: "text",
                           data: dataEmail
                         }).done(function(data) {
                            console.log(data);
                             //jsonDataProduct = JSON.parse(data);
                             data = "";
     
                             console.log("\nEMAIL ENVIADO COM SUCESSO \n\n\n"); //5555 5555 5555 5557
     
                           }).fail(function(request, status, error) {
                               console.log(error);
                               console.log(status);
                               //alert('Erro ao enviar e-mail');
                           });
     
                       }
                       else{
                         console.log("ERROOOOOOOOOOOO")
                       }
                       data = "";
           
                     }).fail(function(request, status, error) {
                       console.log(error);
                       //console.log(request.responseText);
                       alert('Erro ao cadastrar fatura de pagamento');
                     });
          
                     //goToConfirmation();

                 }).fail(function(request, status, error) {
                     console.log(error);
                     //console.log(request.responseText);
                     alert('Erro ao cadastrar perfil de usuário');
                 });
         }

         }).fail(function(request, status, error) {
           console.log(error);
           //console.log(request.responseText);
           alert('Erro ao buscar usuário cadastrado');
         });

         //loader.dismiss();
         if(confirmation == true){

           this.presentSucesso();

           this.clearCart();

         }
         else{

           this.presentFailAlert();

         }


 }

 async presentSucesso() {
    const alert = await this._alertCtrl.create({
      header: "Sucesso.\n",
      message: 'Pedido cadastrado!',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Erro",
      message: 'Ocorreu algum problema com o seu pagamento!',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

}
