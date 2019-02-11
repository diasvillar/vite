import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-history-details',
	templateUrl: './history-details.page.html',
	styleUrls: ['./history-details.page.scss'],
})
export class HistoryDetailsPage implements OnInit {

	public history: string = this.navParams.get('history');
	
	constructor(
		public navCtrl: NavController, 
		public navParams : NavParams
	) { }
	
	ngOnInit() {

		console.log("history: " + this.history["status"] + "\n");
	 }
	
}