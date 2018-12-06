import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import {ActivatedRoute} from "@angular/router";

import { Restaurante } from '../../domain/restaurante/restaurante';
import { CardapioCafe } from '../../domain/cardapioCafe/cardapioCafe';
import { CardapioGeral } from '../../domain/cardapioGeral/cardapioGeral';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-restaurant',
	templateUrl: './restaurant.page.html',
	styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
	
	public segment : string;
	itens : any[] = [,,,,,,,,];

	categorias :any[];
    pedido: number = 0;
	public restaurante: Restaurante;
    public url: string;
    public urlGeral: string;
    public urlCategoria: string;
    public cardapiosCafe: CardapioCafe[];
	public cardapiosGeral: CardapioGeral[];
	public loading: any;
	
	constructor(
		public navCtrl: NavController,
        private _http: Http,
        private _loadingCtrl: LoadingController,
        private _alertCtrl: AlertController,
		//public navParams: NavParams,
		private route: ActivatedRoute
	) { 
		this.route.queryParams.subscribe(params => {
			this.restaurante = new Restaurante(null, null, null, null, null, null);
			this.restaurante.id = params["id"];
			this.restaurante.nome = params ["nome"];
			this.restaurante.telefone = params["telefone"];
			this.restaurante.imgurl = params["imgurl"];
			this.restaurante.imgtopo = params["imgtopo"];
			this.restaurante.endereco = params["endereco"];
			//console.log(JSON.stringify(this.restaurante) + "\n");
		});

		this.urlCategoria = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_categorias_cardapio/";
		this.url = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cardapio_cafe_json/"+this.restaurante.id;
		this.urlGeral = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cardapio_geral_json/"+this.restaurante.id;
		this.segment = "";
		
	}
	
	async ngOnInit() {
		
		this.presentLoading();
	  
		await this._http
			  .get(this.urlCategoria)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( categorias => {
				  var teste = JSON.stringify(categorias);
				  console.log("##### IMPRESSÃO DAS CATEGORIAS: " + teste + "\n\n\n");

				  this.categorias = categorias;			  
			  } )
			  .catch(err => {
				  console.log(err);
				  this.loading.dismiss();
				  this.presentFailAlert();
				  this.goToConfirmation();
			  });

		await this._http
			  .get(this.url)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( cardapiosCafe => {
				  var teste = JSON.stringify(cardapiosCafe);
				  console.log("##### IMPRESSÃO DO CARDAPIO CAFÉ: " + teste + "\n\n\n");

				  this.cardapiosCafe = cardapiosCafe;
			  } )
			  .catch(err => {
				  console.log(err);
				  this.loading.dismiss();
				  this.presentFailAlert();
				  this.goToConfirmation();
			  });

		await this._http
			  .get(this.urlGeral)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( cardapiosGeral => {
				 var testeGeral = JSON.stringify(cardapiosGeral);
				 console.log("##### IMPRESSÃO DO CARDAPIO GERAL: " + testeGeral);

				 this.cardapiosGeral = cardapiosGeral; 
				 this.loading.dismiss();
	  
			  } )
			  .catch(err => {
				 console.log(err);
				 this.loading.dismiss();
				 this.presentFailAlert();
				 this.goToConfirmation();
			  });
	  
		     

	}
	
	async presentLoading() {
		this.loading = await this._loadingCtrl.create({
		   message: 'Buscando Cardápio. Aguarde ...'
	   });
	   return await this.loading.present();
    }

   async presentFailAlert() {
    const alert = await this._alertCtrl.create({
		header: 'Falha na conexão',
		buttons: [{text: 'OK, estou ciente'}],
		message: "Não foi possível obter o cardápio. Tente mais tarde."
    });

    await alert.present();
  }

  selectedSmoothies(){
	  this.segment = "Smoothies";
	  console.log("segment: " + this.segment + "\n");
  }

  selectedShakes(){
	this.segment = "Shakes";
	console.log("segment: " + this.segment + "\n");
  }

  selectedSanduiches(){
	this.segment = "Sanduíches";
	console.log("segment: " + this.segment + "\n");
  }

  selectedSalgados(){
	this.segment = "Salgados";
	console.log("segment: " + this.segment + "\n");
  }

  selectedPratos(){
	this.segment = "Pratos";
	console.log("segment: " + this.segment + "\n");
  }

  selectedPetiscos(){
	this.segment = "Petiscos";
	console.log("segment: " + this.segment + "\n");
  }

  selectedEspressos(){
	this.segment = "Espressos";
	console.log("segment: " + this.segment + "\n");
  }

  selectedDoces(){
	this.segment = "Doces";
	console.log("segment: " + this.segment + "\n");
  }

  selectedCoqueteis(){
	this.segment = "Coquetéis";
	console.log("segment: " + this.segment + "\n");
  }

  selectedChocolates(){
	this.segment = "Chocolates";
	console.log("segment: " + this.segment + "\n");
  }

  selectedCafesDaManha(){
	this.segment = "Cafés Da Manhã";
	console.log("segment: " + this.segment + "\n");
  }

  selectedBebidas(){
	this.segment = "Bebidas";
	console.log("segment: " + this.segment + "\n");
  }

  selectedCafes(){
	this.segment = "Cafés";
	console.log("segment: " + this.segment + "\n");
  }


  goToConfirmation(){
    this.navCtrl.navigateRoot('/tabs/(home:home)');
  }
}