import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
	
	restaurants = [,,,];

	constructor(
		public navCtrl: NavController
	) { }
	
	ngOnInit() {
		this.navCtrl.navigateRoot('/tabs/(home:home)');
	 }

	search(val : string) {
		console.log(val);
	}
	
}