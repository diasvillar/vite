import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-edit-card',
	templateUrl: './edit-card.page.html',
	styleUrls: ['./edit-card.page.scss'],
})
export class EditCardPage implements OnInit {
	
	@Input() card: any;

	constructor(
		private modalCtrl: ModalController
	) { }
	
	ngOnInit() { }
	
	save() {
		this.modalCtrl.dismiss();
	}

}