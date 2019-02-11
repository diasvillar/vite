import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';

import { Restaurante } from '../../../domain/restaurante/restaurante';
import { Cpagamento } from '../../../domain/cpagamento/cpagamento';


@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.page.html',
  styleUrls: ['./new-card.page.scss'],
})
export class NewCardPage implements OnInit {

  public restaurante: Restaurante;
  public cPagamento : Cpagamento;
  public data;
  public http;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
    private _alertCtrl: AlertController,
    http: Http
  ) { 

    this.route.queryParams.subscribe(params => {
      this.restaurante = new Restaurante(null, null, null, null, null, null, null);
      this.restaurante.id = params["id"];
      this.restaurante.nome = params ["nome"];
      this.restaurante.telefone = params["telefone"];
      this.restaurante.imgurl = params["imgurl"];
      this.restaurante.imgtopo = params["imgtopo"];
      this.restaurante.endereco = params["endereco"];      
    });

    this.cPagamento = new Cpagamento(null,null,null,null,null,null,null,null);
    this.data={};
    this.data.response = '';
    this.http = http;

    this.cPagamento.payment_method_code = "credit_card";
    

  }

  ngOnInit() {
  }

    testarCC(card_number) {

     var cartoes = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        americanExpress: /^3[47][0-9]{13}/,
        dinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        elo: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\\d|50677[0-8])|(50900\\d|5090[1-9]\\d|509[1-9]\\d{2})|65003[1-3]|(65003[5-9]|65004\\d|65005[0-1])|(65040[5-9]|6504[1-3]\\d)|(65048[5-9]|65049\\d|6505[0-2]\\d|65053[0-8])|(65054[1-9]|6505[5-8]\\d|65059[0-8])|(65070\\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\\d|650920)|(65165[2-9]|6516[6-7]\\d)|(65500\\d|65501\\d)|(65502[1-9]|6550[3-4]\\d|65505[0-8]))[0-9]{10,12}/
      };

      for (var cartao in cartoes){
        if (card_number.match(cartoes[cartao])) {
          return cartao;
        }  
      }     
      return false;
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
		this.router.navigate(['/cards-list'],  navigationExtras);
		//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
  }

  cadastrarCPagamento(){

      var link = 'https://viniciusvillar.000webhostapp.com/vite/page/cadastrar_c_pagamento';
      var data = JSON.stringify(
        {
          idUser: sessionStorage.getItem('usuarioId'), 
          payment_method_code: this.cPagamento.payment_method_code, 
          payment_company_code: this.testarCC(this.cPagamento.card_number),
          holder_name: this.cPagamento.holder_name,
          card_cvv: this.cPagamento.card_cvv,
          card_expiration: this.cPagamento.card_expiration,
          card_number: this.cPagamento.card_number
        });     

        console.log("data: " + data + "\n");
  
        this.http.post(link, data)
        .subscribe(data =>{
          this.data.response = data._body;
          if (this.data.response == "sucesso"){
            
           this.presentAlert();
 
            this.seleciona(this.restaurante);
          }
        }, error =>{
         
          this.presentFailAlert();
 
        });
      }

      async presentAlert() {
        const alert = await this._alertCtrl.create({
          header: "Cadastrado com Sucesso!",
          buttons: [{text: 'OK'}]
        });
    
        await alert.present();
      }

      async presentFailAlert() {
        const alert = await this._alertCtrl.create({
          header: "Falha na conexão",
          message: 'Não foi possível cadastrar o usuário. Tente novamente.',
          buttons: [{ text: "Estou ciente!" }]
        });
    
        await alert.present();
      
    }

}
