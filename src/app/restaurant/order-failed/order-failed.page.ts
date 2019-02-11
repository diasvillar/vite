import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';

import { Restaurante } from '../../../domain/restaurante/restaurante';

@Component({
	selector: 'app-order-failed',
	templateUrl: './order-failed.page.html',
	styleUrls: ['./order-failed.page.scss'],
})
export class OrderFailedPage implements OnInit {
	
	anim : any;

	public restaurante: Restaurante;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public navCtrl: NavController
	) { 
		
		this.route.queryParams.subscribe(params => {
			this.restaurante = new Restaurante(null, null, null, null, null, null, null);
			this.restaurante.id = params["id"];
			this.restaurante.nome = params ["nome"];
			this.restaurante.telefone = params["telefone"];
			this.restaurante.imgurl = params["imgurl"];
			this.restaurante.imgtopo = params["imgtopo"];
			this.restaurante.endereco = params["endereco"]; 
		});
	}
	
	ngOnInit() { 

		if(sessionStorage.getItem('flagLogado')!="sim"){
			this.goToLogin();
		  }

	}

	goToLogin(){

		this.navCtrl.navigateRoot('/login');

	}

	seleciona(restaurante){
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
	
	ionViewDidEnter() {
		setTimeout(() => {
			this.anim.play();
		}, 250);
	}

	handleAnimation(anim: any) {
		this.anim = anim;
	}

	close(){

		this.navCtrl.navigateRoot('/tabs/(home:home)');
	}

}
