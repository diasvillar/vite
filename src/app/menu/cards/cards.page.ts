import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditCardPage } from './edit-card/edit-card.page';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.page.html',
	styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
	
	constructor(
		private modalCtrl: ModalController
	) { }
	
	ngOnInit() { }
	
	edit() {
		this.modalCtrl.create({
			component: EditCardPage,
			componentProps: {card: {}},
			showBackdrop: true,
			backdropDismiss: true,
			cssClass: 'custom-modal'
		}).then(modal => {
			modal.present();
		});
	}

	remove() {
		
	}
}