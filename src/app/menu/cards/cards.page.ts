import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

import { EditCardPage } from './edit-card/edit-card.page';
import { Cpagamento } from '../../../domain/cpagamento/cpagamento';


@Component({
	selector: 'app-cards',
	templateUrl: './cards.page.html',
	styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

	public cPagamentos: Cpagamento[];
	
	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private _http: Http,
		private router: Router
	) { }
	
	async ngOnInit() {
		if(sessionStorage.getItem('flagLogado')!= "sim"){
			this.goToLogin();
		  }
	  
		  var link = 'https://viniciusvillar.000webhostapp.com/vite/page/get_card/'+sessionStorage.getItem('usuarioId');
	  
		  await this._http
					.get(link)
					.pipe(map(res => res.json()))
					.toPromise()
					.then( cPagamentos => {
	  
						this.cPagamentos = cPagamentos;
					
					} )
					.catch(err => {
						console.log(err);
					});
	  
	 }

	 goToLogin(){
		this.navCtrl.navigateRoot('/login');
	  }

	  goToCards(){
		this.router.navigate(['/cards']);
	  }
	
	async edit() {
		const modal = await this.modalCtrl.create({
			component: EditCardPage,
			componentProps: {card: {}},
			showBackdrop: true,
			backdropDismiss: true,
			cssClass: 'custom-modal'
		});

		modal.onDidDismiss().then((d:any) => {
			if(d.data == 200){
				this.ngOnInit();
			}
		});
	
		return await modal.present();
		
	}

	async remove(id, index) {

		await this._http
				.get('https://viniciusvillar.000webhostapp.com/vite/page/delete_card/'+ id)
				.pipe(map(res => res.json()))
				.toPromise()
				.then( response => {

					console.log("Cartão excluído\n");
				
				} )
				.catch(err => {
					console.log(err);
				});

				console.log("index: " +index+"\n");

		this.cPagamentos.splice(index, 1);	
	}
}