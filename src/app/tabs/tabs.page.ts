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
      message: '<p>Estamos trabalhando nesse exato momento para deixar a Vite mais completa para você!</p> <p>Agradecemos a compreensão.</p>',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }
}
