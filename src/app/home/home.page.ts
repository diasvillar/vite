import { ViewChild, Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';

import { Restaurante } from '../../domain/restaurante/restaurante';
//import { ConsoleReporter } from 'jasmine';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
	
	
	//restaurants = [,,,];

	public restaurantes: Restaurante[];
	public loading: any;

	constructor(
		public navCtrl: NavController,
		private _http: Http,
		@ViewChild(LoadingController) private _loadingCtrl:LoadingController,
    	//private _loadingCtrl: LoadingController,
    	private _alertCtrl: AlertController,
		private router: Router
	) { }
	
	async ngOnInit() {
		if(sessionStorage.getItem('flagLogado')!= "sim"){
			this.goToLogin();
		  }
		  else{
	
			this.presentLoading();

			await this._http
			.get('https://viniciusvillar.000webhostapp.com/vite/page/get_ionic')
			.pipe(map(res=> res.json()))
			.toPromise()
			.then(restaurantes => {
			  this.restaurantes = restaurantes;
			  this.loading.dismiss();
			})
			.catch(err => {
			  console.log(err);
			  this.loading.dismiss();
			  this.presentFailAlert();

			});
		  }
	 }

	openRestaurant(r : any) {
		this.router.navigate['/restaurant'];
	}

	goToLogin(){
		this.navCtrl.navigateRoot('/login');
	}
	
	async presentFailAlert() {
		const alert = await this._alertCtrl.create({
		  header: "Falha na conexão",
		  message: 'Não foi possível obter a lista de restaurantes. Tente novamente.',
		  buttons: [{ text: "Estou ciente!" }]
		});
	
		await alert.present();
	}

	async presentLoading() {
		 this.loading = await this._loadingCtrl.create({
			message: 'Listando restaurantes. Aguarde...'
		});
		return await this.loading.present();
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
		this.router.navigate(['/restaurant'],  navigationExtras);
		//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
	}
	
	goToLocalEscolhido(params){
		if (!params) params = {};
		this.router.navigate['/restaurant'];
	}
	
	
}