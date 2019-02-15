import { ViewChild, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HistoryDetailsPage } from './history-details/history-details.page';
import { Router } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Cart } from '../../../domain/cart/cart';

@Component({
	selector: 'app-history',
	templateUrl: './history.page.html',
	styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

	public carts: Cart[];
	checkStatus: boolean = true;
	public day = new Array();
	public month = new Array();
	public loading: any;
	
	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private _http: Http,
		@ViewChild(LoadingController) private _loadingCtrl:LoadingController,
    	private _alertCtrl: AlertController,
		private router: Router
	) { }
	
	async ngOnInit() {

		await this.presentLoading();
		
		if(sessionStorage.getItem('flagLogado')!= "sim"){
			this.goToLogin();
		}
		else{
				await this._http
				.get('https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cart_json/'+sessionStorage.getItem('usuarioId'))
				.pipe(map(res=> res.json()))
				.toPromise()
				.then(carts => {
					//console.log("Cart : "+ JSON.stringify(carts) + "\n\n\n");
					this.carts = carts.reverse();

					for(var x = 0; x<this.carts.length; x++){
						this.carts[x].valor_total = Number(this.carts[x].valor_total);
						this.carts[x].dezPorCento = Number(this.carts[x].dezPorCento);
						this.day.push(this.carts[x].horario.substring(8,10));
						if(this.carts[x].horario.substring(5,7) == "01")
							this.month.push("JAN");
						else if(this.carts[x].horario.substring(5,7) == "02")
							this.month.push("FEV");
						else if(this.carts[x].horario.substring(5,7) == "03")
							this.month.push("MAR");
						else if(this.carts[x].horario.substring(5,7) == "04")
							this.month.push("ABR");
						else if(this.carts[x].horario.substring(5,7) == "05")
							this.month.push("MAI");
						else if(this.carts[x].horario.substring(5,7) == "06")
							this.month.push("JUN");
						else if(this.carts[x].horario.substring(5,7) == "07")
							this.month.push("JUL");
						else if(this.carts[x].horario.substring(5,7) == "08")
							this.month.push("AGO");
						else if(this.carts[x].horario.substring(5,7) == "09")
							this.month.push("SET");
						else if(this.carts[x].horario.substring(5,7) == "10")
							this.month.push("OUT");
						else if(this.carts[x].horario.substring(5,7) == "11")
							this.month.push("NOV");
						else if(this.carts[x].horario.substring(5,7) == "12")
							this.month.push("DEZ");

					}

					if(this.carts.length == 0){
						this.checkStatus = false;
					  }
				})
				.catch(err => {
					console.log(err);
					this.presentFailAlert();
				});
		}
		await this.loading.dismiss();
	}

	async presentLoading() {
		this.loading = await this._loadingCtrl.create({
		   message: 'Carregando ...'
		});
		return await this.loading.present();
  }

	async presentFailAlert() {
		const alert = await this._alertCtrl.create({
		  header: "Falha na conexão",
		  message: 'Não foi possível obter a lista de restaurantes. Tente novamente.',
		  buttons: [{ text: "Estou ciente!" }]
		});
	
		await alert.present();
	}

	goToLogin(){
		this.navCtrl.navigateRoot('/login');
	}

	details(status) {
		this.modalCtrl.create({
			component: HistoryDetailsPage,
			componentProps: {history: {status}},
			showBackdrop: true,
			backdropDismiss: true,
			cssClass: 'custom-modal'
		}).then(modal => {
			modal.present();
		});
	}
	
}
