import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HistoryDetailsPage } from './history-details/history-details.page';

@Component({
	selector: 'app-history',
	templateUrl: './history.page.html',
	styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
	
	constructor(
		private modalCtrl: ModalController
	) { }
	
	ngOnInit() {
	}

	details() {
		this.modalCtrl.create({
			component: HistoryDetailsPage,
			componentProps: {history: {}},
			showBackdrop: true,
			backdropDismiss: true,
			cssClass: 'custom-modal'
		}).then(modal => {
			modal.present();
		});
	}
	
}
