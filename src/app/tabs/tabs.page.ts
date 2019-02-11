import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public _alertCtrl: AlertController
  ) {}

  async presentFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Ops",
      message: 'Estamos trabalhando nesse exato momento para tornar essa busca possível!. Agradecemos a compreensão.',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }
}
