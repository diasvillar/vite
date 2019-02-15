import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { NavController, LoadingController, AlertController } from '@ionic/angular';

import { Restaurante } from '../../../domain/restaurante/restaurante';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public restaurante: Restaurante;
  public loading: any;

  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
		private router: Router
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

 async ngOnInit() {
    
    await this.presentLoading();

    if(sessionStorage.getItem('flagLogado')!="sim"){
			this.goToLogin();
    }
    await this.loading.dismiss();
  }

  async presentLoading() {
		this.loading = await this._loadingCtrl.create({
		   message: 'Carregando ...'
		});
		return await this.loading.present();
  }

  goToLogin(){
		this.navCtrl.navigateRoot('/login');
	}

  goToCart(restaurante){
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
    this.router.navigate(['/order-cart'],  navigationExtras);
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
	}

}
