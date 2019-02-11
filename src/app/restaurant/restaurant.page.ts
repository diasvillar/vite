import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

import { Restaurante } from '../../domain/restaurante/restaurante';
import { CardapioCafe } from '../../domain/cardapioCafe/cardapioCafe';
import { CardapioGeral } from '../../domain/cardapioGeral/cardapioGeral';
import { Cart } from '../../domain/cart/cart';

@Component({
	selector: 'app-restaurant',
	templateUrl: './restaurant.page.html',
	styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
	
	public segment : string;
	public cart: Cart;
	itens : any[] = [,,,,,,,,];

	categorias :any[];
	indisponiveis:any[];
  	pedido: number = 0;
	public restaurante: Restaurante;
	public url: string;
	public urlGeral: string;
	public urlCategoria: string;
	public urlIndisponivel: string;
	public cardapiosCafe: CardapioCafe[];
	public cardapiosGeral: CardapioGeral[];
	public loading: any;
	
	constructor(
		public navCtrl: NavController,
		private _http: Http,
		private _loadingCtrl: LoadingController,
		private _alertCtrl: AlertController,
		private route: ActivatedRoute,
		private router: Router
	) { 
		this.route.queryParams.subscribe(params => {
			this.restaurante = new Restaurante(null, null, null, null, null, null,null);
			this.restaurante.id = params["id"];
			this.restaurante.nome = params ["nome"];
			this.restaurante.telefone = params["telefone"];
			this.restaurante.imgurl = params["imgurl"];
			this.restaurante.imgtopo = params["imgtopo"];
			this.restaurante.endereco = params["endereco"];
		});

		this.urlCategoria = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_categorias_cardapio/";
		this.url = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cardapio_cafe_json/"+this.restaurante.id;
		this.urlGeral = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cardapio_geral_json/"+this.restaurante.id;
		this.urlIndisponivel = "https://viniciusvillar.000webhostapp.com/vite/restaurante/get_cardapio_indisponivel_novo_2/"+this.restaurante.id;
		this.segment = "Cafés";
		
	}
	
	async ngOnInit() {

		if(sessionStorage.getItem('flagLogado')!="sim"){
			this.goToLogin();
		}
		
		this.presentLoading();
	  
		await this._http
			  .get(this.urlCategoria)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( categorias => {
				  //var teste = JSON.stringify(categorias);
				  this.categorias = categorias;			  
			  } )
			  .catch(err => {
				  console.log(err);
				  this.loading.dismiss();
				  this.presentFailAlert();
				  this.close();
			  });

		await this._http
			  .get(this.urlIndisponivel)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( indisponiveis => {
				  //var teste = JSON.stringify(categorias);
				  this.indisponiveis = indisponiveis;	
				  console.log("indisponíveis: " + JSON.stringify(indisponiveis) + "\n\n");		  
			  } )
			  .catch(err => {
				  console.log(err);
				  this.loading.dismiss();
				  this.presentFailAlert();
				  this.close();
			  });

		await this._http
			  .get(this.url)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( cardapiosCafe => {
				  //var teste = JSON.stringify(cardapiosCafe);
				  this.cardapiosCafe = cardapiosCafe;
				  console.log("cardapiosCafe: " + JSON.stringify(cardapiosCafe) + "\n\n");
			  } )
			  .catch(err => {
				  console.log(err);
				  this.loading.dismiss();
				  this.presentFailAlert();
				  this.close();
			  });

		await this._http
			  .get(this.urlGeral)
			  .pipe(map(res => res.json()))
			  .toPromise()
			  .then( cardapiosGeral => {
				 //var testeGeral = JSON.stringify(cardapiosGeral);
				 this.cardapiosGeral = cardapiosGeral; 
				 this.loading.dismiss();
			  } )
			  .catch(err => {
				 console.log(err);
				 if (this.loading != undefined)
				 	this.loading.dismiss();
				 this.presentFailAlert();
				 this.close();
			  });

	}

	goToLogin(){
		this.navCtrl.navigateRoot('/login');
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
  }

  selectedShakes(){
		this.segment = "Shakes";
  }

  selectedSanduiches(){
		this.segment = "Sanduíches";
  }

  selectedSalgados(){
		this.segment = "Salgados";
  }

  selectedPratos(){
		this.segment = "Pratos";
  }

  selectedPetiscos(){
		this.segment = "Petiscos";
  }

  selectedEspressos(){
		this.segment = "Espressos";
  }

  selectedDoces(){
		this.segment = "Doces";
  }

  selectedCoqueteis(){
		this.segment = "Coquetéis";
  }

  selectedChocolates(){
		this.segment = "Chocolates";
  }

  selectedCafesDaManha(){
		this.segment = "Cafés Da Manhã";
  }

  selectedBebidas(){
		this.segment = "Bebidas";
  }

  selectedCafes(){
		this.segment = "Cafés";
  }
	
  selectedChas(){
		this.segment = "Chás";
  }

  selecionaCafe(cardapioCafe, restaurante){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				"id" : restaurante.id,
				"nome" : restaurante.nome,
				"telefone" : restaurante.telefone,
				"imgurl" : restaurante.imgurl,
				"imgtopo" : restaurante.imgtopo,
				"endereco" : restaurante.endereco,
				"cardapioCafeId": cardapioCafe.id,
				"cardapioCafeRestauranteId": cardapioCafe.restaurante_id,
				"cardapioCafeCategoriaSuperior": cardapioCafe.categoria_superior,
				"cardapioCafeDescricaoCategoria": cardapioCafe.descricao_categoria,
				"cardapioCafeNome": cardapioCafe.nome,
				"cardapioCafePreco": cardapioCafe.preco,
				"cardapioCafeDescricaoSubCategoria": cardapioCafe.descricao_sub_categoria,
				"tipo": 0
			}
		};
		console.log(JSON.stringify(navigationExtras));
		this.router.navigate(['/item'],  navigationExtras);
  }

  selecionaGeral(cardapioGeral, restaurante){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				"id" : restaurante.id,
				"nome" : restaurante.nome,
				"telefone" : restaurante.telefone,
				"imgurl" : restaurante.imgurl,
				"imgtopo" : restaurante.imgtopo,
				"endereco" : restaurante.endereco,
				"cardapioGeralId": cardapioGeral.id,
				"cardapioGeralRestauranteId": cardapioGeral.restaurante_id,
				"cardapioGeralCategoria": cardapioGeral.categoria,
				"cardapioGeralDescricao": cardapioGeral.descricao,
				"cardapioGeralNome": cardapioGeral.nome,
				"cardapioGeralPreco": cardapioGeral.preco,
				"cardapioGeralImgUrl": cardapioGeral.img_url,
				"cardapioGeralTempo": cardapioGeral.tempo,
				"cardapioGeralTempoMin": cardapioGeral.tempo_min,
				"cardapioGeralTempoMax": cardapioGeral.tempo_max,
				"tipo": 1
			}
		};
		console.log(JSON.stringify(navigationExtras));
		this.router.navigate(['/item'],  navigationExtras);
  }

	goToCart(restaurante){
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
	}

	goToAbout(restaurante){
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
			this.router.navigate(['/about'],  navigationExtras);
	}

	close(){
		if(sessionStorage.getItem('cart')){
			this.cart = JSON.parse(sessionStorage.getItem('cart'));
			sessionStorage.removeItem('cart');
		}
		this.navCtrl.navigateRoot('/tabs/(home:home)');
	}

	estaIndisp(id, segment){
		for(var x = 0; x < this.indisponiveis.length; x++){
			if(this.indisponiveis[x].categoria == segment){
				for(var y = 0; y < this.indisponiveis[x].items.length; y++){
					if(id == this.indisponiveis[x].items[y].id)
						return true;
				}
			}
		}
	}
}