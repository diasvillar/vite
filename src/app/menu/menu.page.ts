import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public nameUser: string;
  public emailUser: string;
  public idUser: string;

  constructor(
    public navCtrl: NavController,
    public _alertCtrl: AlertController
  ) { 
    this.nameUser = sessionStorage.getItem('usuarioName');
    this.emailUser = sessionStorage.getItem('usuarioLogado');
    this.idUser = sessionStorage.getItem('usuarioId');
  }

  ngOnInit() {}

  async presentFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Ops",
      message: '<p>Estamos trabalhando nesse exato momento para deixar a Vite mais completa para você!</p> <p>Agradecemos a compreensão.</p>',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

  logout(){
    sessionStorage.removeItem('usuarioId');
    sessionStorage.removeItem('usuarioName');
    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('flagLogado');
    sessionStorage.removeItem('cart');
    this.navCtrl.navigateRoot('/login');
  }


}
