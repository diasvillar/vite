import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-order-confirmed',
	templateUrl: './order-confirmed.page.html',
	styleUrls: ['./order-confirmed.page.scss'],
})
export class OrderConfirmedPage implements OnInit {
	
	anim : any;


	constructor() { }
	
	ngOnInit() { }
	
	ionViewDidEnter() {
		setTimeout(() => {
			this.anim.play();
		}, 250);
	}

	handleAnimation(anim: any) {
		this.anim = anim;
	}

}
