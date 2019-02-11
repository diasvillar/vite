import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http'

import { Restaurante } from '../../../domain/restaurante/restaurante';
import { Cart } from '../../../domain/cart/cart';

@Component({
  selector: 'app-order-end',
  templateUrl: './order-end.page.html',
  styleUrls: ['./order-end.page.scss'],
})
export class OrderEndPage implements OnInit {

  public restaurante: Restaurante;
  public cart: Cart;
  public retiradaData: string;
  public dezPorCento: string;
  public isoDate: any;
  public isoDateMin: any;
  public valorView : number;
  public verifica: boolean = false;
  public tempoMax: any = 0;
  public isoCurrentDate: any;
  public data;
  public http;
  public url: string;
  

  public hora7: any = new Date("1970-01-01T07:00:00.000Z").toISOString();
  public hora203: any = new Date("1970-01-01T20:30:00.000Z").toISOString();
  public hora103: any = new Date("1970-01-01T10:30:00.000Z").toISOString();
  //public hora16: any = new Date("1970-01-01T16:00:00.000Z");


  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public navCtrl: NavController,
      http: Http, 
      public _alertCtrl: AlertController
  ) 
  { 

    this.route.queryParams.subscribe(params => {
      this.restaurante = new Restaurante(null, null, null, null, null, null, null);
      this.restaurante.id = params["id"];
      this.restaurante.nome = params ["nome"];
      this.restaurante.telefone = params["telefone"];
      this.restaurante.imgurl = params["imgurl"];
      this.restaurante.imgtopo = params["imgtopo"];
      this.restaurante.endereco = params["endereco"];      
    });

    this.cart = new Cart(null,null,null,null,null,null,null,null,null,null);
    this.http = http;
    this.data = {};
    this.data.response = '';
    this.url = "https://viniciusvillar.000webhostapp.com/vite/page/cadastrar_pedido_ionic_cart";
    this.retiradaData = "Consumir no Local";
    this.dezPorCento = "Sim";
    
    var date = new Date(); // Or the date you'd like converted.
    this.isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    this.isoDateMin = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    this.isoCurrentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    
  }

  ngOnInit() {

    console.log(sessionStorage.getItem('usuarioId'));
    console.log(sessionStorage.getItem('usuarioName'));
    console.log(sessionStorage.getItem('usuarioLogado'));

    if(sessionStorage.getItem('flagLogado')!="sim"){
      this.goToLogin();
    }
    if(sessionStorage.getItem('cart')){
      //console.log(sessionStorage.getItem('cart'))
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
      this.cart.retirada = this.retiradaData;
      this.cart.horario = this.isoDate;

    }
    else{
      console.log("Carrinho vazio");
    } 
  }

  goToLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  seleciona(restaurante){
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
		this.router.navigate(['/restaurant'],  navigationExtras);
		//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
  }

  goToCart(restaurante){
    console.log("\n this.retiradaData: " + this.retiradaData + "\n this.isoData: " + this.isoDate);
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

  goToPayment(restaurante){

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

  checkout(){
    this.cart.horario = this.isoDate;
    if(this.dezPorCento == "Sim"){
      this.cart.dezPorCento = parseFloat((this.cart.valor_total*0.10).toFixed(2));
    }
    else{
      this.cart.dezPorCento = 0;
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    
    if(this.isoDate < this.isoDateMin.toISOString()){
      console.log("Entrou aqui pq a hora é anterior a atual \n\n\n");
      this.presentFailAlert();
    }
    else {
      
      var aux7 = this.hora7.substring(12,13);
      var aux203 = this.hora203.substring(11,13);
      var auxDate = this.isoDate.substring(11,13);
      var auxDateMin = this.isoDate.substring(14,16);
      var aux203Min = this.hora203.substring(14,16);

      if(+auxDate < +aux7){
          console.log("Entrou aqui pq a hora é anterior as 7. \n\n\n");
          this.presentFailAlert2();

        }
        else{

          if(+auxDate > +aux203 ){
              console.log("Entrou aqui pq a hora é posterior as 20:30. \n\n\n");
              this.presentFailAlert3();
          }
          else{
            if (+auxDate == +aux203){
              if(+auxDateMin > +aux203Min){
                console.log("Entrou aqui pq a hora é posterior as 20:30. \n\n\n");
                this.presentFailAlert3();
              }
            }
            else{
                for(var i = 0; i<this.cart.pedidos.length; i++){
                  if(this.cart.pedidos[i].cardapioGeral != null){
                    var pedidoTempo = this.cart.pedidos[i].cardapioGeral.tempo;
                    
                    if(+pedidoTempo > +this.tempoMax){
                      this.tempoMax = +pedidoTempo;
                    }

                    if(this.cart.pedidos[i].cardapioGeral.tempo_max == "10:30"){

                      var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(0,2);
                      var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(3,5);
                      
                      if(+auxDate > +pedidoDate){
                        console.log("Entrou aqui pq a hora é posterior as 10:30. \n\n\n");
                        this.verifica = true;
                      }
                      if (+auxDate == +pedidoDate){
                        if(+auxDateMin > +pedidoDateMin){

                            console.log("############# aqui ########");
                            this.verifica = true;

                        }
                      }
                    }

                    if(this.cart.pedidos[i].cardapioGeral.tempo_max == "15:00"){
                      
                      var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(0,2);
                      var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(3,5);
                      
                      if(+auxDate > +pedidoDate){
                        console.log("Entrou aqui pq a hora é posterior as 15:00. \n\n\n");
                      }
                      if (+auxDate == +pedidoDate){
                        if(+auxDateMin > +pedidoDateMin){

                            console.log("############# aqui ########");
                            this.verifica = true;

                        }
                      }
                    }
                  

                    if(this.cart.pedidos[i].cardapioGeral.tempo_min == "16:00"){

                      var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(0,2);
                      var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(3,5);
                      
                      if(+auxDate < +pedidoDate){
                        console.log("Entrou aqui pq a hora é inferior as 16:00. \n\n\n");
                        this.verifica = true;
                      }
                    }

                    if(this.cart.pedidos[i].cardapioGeral.tempo_min == "12:00"){

                      var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(0,2);
                      var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(3,5);
                      
                      if(+auxDate < +pedidoDate){
                        console.log("Entrou aqui pq a hora é inferior as 12:00. \n\n\n");
                        this.verifica = true;
                      }
                    }
                  }

                }

                this.isoCurrentDate.setMinutes(this.isoCurrentDate.getMinutes() + this.tempoMax);
                var day = new Date(this.isoDate);

                if(day.getDay() == 6 || day.getDay() == 0){

                  console.log("Final de semana. \n\n\n");
                      this.verifica = false;
                      this.presentFailAlert4();

                }
                else{
                  if(this.isoCurrentDate.toISOString() > this.isoDate){
                    console.log("entra aqui pq com o pedido, o tempo fica inferior a chegada\n");
  
                    if (this.verifica != true){
                      this.cart.retirada = this.retiradaData;
                      var data = JSON.stringify(this.cart);  
                      console.log(data)
                      this.http.post(this.url, data)
                        .subscribe(data => {
                            this.data.response = data._body;
                            this.presentFailAlert5();;  
                        }, error => {
                            console.log("Oooops!");
                            this.presentFailAlert6();
                        });
                        this.verifica = false;
                        //this.navCtrl.push(PagamentoPage, { restauranteSelecionado: this.restaurante });
                        this.goToPayment(this.restaurante);
                    }
                    else{
                      console.log("Horário cardápio inválido. \n\n\n");
                      this.verifica = false;
                      this.presentFailAlert7();
                    }
                  }
                  else{
                    if(this.verifica != true){
                      this.cart.retirada = this.retiradaData;
                      var data = JSON.stringify(this.cart);  
                      console.log(data)
                      this.http.post(this.url, data)
                        .subscribe(data => {
                            this.data.response = data._body;
                        }, error => {
                            console.log("Oooops!");
                            this.presentFailAlert6();
                        });
                        this.verifica = false;
                        this.goToPayment(this.restaurante);
                        //this.navCtrl.push(PagamentoPage, { restauranteSelecionado: this.restaurante });
                    }
                    else{
                      console.log("Horário cardápio inválido. \n\n\n");
                      this.verifica = false;
                      this.presentFailAlert7();
  
                    }
                  }
                }


            }
          }  
        }
      }
  }


  async presentFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Horário inferior ao atual.",
      message: 'Por favor, atualize o horário de chegada.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert2() {
    const alert = await this._alertCtrl.create({
      header: "O estabelecimento só abre após às 7:00.",
      message: 'Por favor, atualize o horário de chegada.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert3() {
    const alert = await this._alertCtrl.create({
      header: "A VITE só aceita pedidos até às 20:30.\n",
      message: 'Por favor, atualize o horário de chegada.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert4() {
    const alert = await this._alertCtrl.create({
      header: "Infelizmente, a VITE ainda não está operando aos finais de semana.",
      message: 'Pedidos somente nos estabelecimentos.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert5() {
    const alert = await this._alertCtrl.create({
      header: "O tempo de preparo do seu pedido é maior do que o horário da sua chegada",
      message: 'Seu pedido ficará pronto às ' + this.isoCurrentDate.toISOString().substring(11,13) + ':' + this.isoCurrentDate.toISOString().substring(14,16),
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert6() {
    const alert = await this._alertCtrl.create({
      header: "Falha na conexão!",
      message: 'Não foi possível salvar o pedido. Tente novamente.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  async presentFailAlert7() {
    const alert = await this._alertCtrl.create({
      header: "Algum pedido não respeita o horário do cardápio.\n",
      message: 'Por favor, remova-o ou atualize a hora que chegará ao estabelecimento.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }
  
}
