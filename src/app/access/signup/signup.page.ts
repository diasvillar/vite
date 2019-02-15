import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Http } from '@angular/http';

import { Usuario } from '../../../domain/usuario/usuario';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  @ViewChild('confirmation') conf; 

  public data;
  public http;
  public usuario: Usuario;
  public loading: any;

  constructor(
    public navCtrl: NavController,
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController,
    http: Http) {

      this.data = {};
      this.data.response = '';
      this.http = http;
      this.usuario = new Usuario(null, null, null, null, null);

  }

  ngOnInit() {
  }

  async submit(){

    await this.presentLoading();

     var link = 'https://viniciusvillar.000webhostapp.com/vite/page/cadastrar_usuario_ionic';
     var data = JSON.stringify({nome: this.usuario.nome, email: this.usuario.email, password: this.usuario.password});
     
     if(this.usuario.password == this.conf.value){
 
       this.http.post(link, data)
       .subscribe(data =>{
         this.data.response = data._body;
         var res = this.data.response.split("|");
         if (res [1] == "sucesso"){
           
          this.presentAlert();
 
           res = res[0].split("*");
           sessionStorage.setItem("usuarioId",res[0]);
           sessionStorage.setItem("usuarioName", this.usuario.nome);
           sessionStorage.setItem("usuarioLogado",this.usuario.email);
           sessionStorage.setItem("flagLogado","sim");
           window.localStorage.setItem("usuarioLogado",this.usuario.email);
           window.localStorage.setItem("flagLogado","sim");

           this.navCtrl.navigateRoot('/tabs/(home:home)');
         }
       }, error =>{
        
         this.presentFailAlert();

       });
     }
     else{
       this.presentPasswordFailAlert();
     }

     await this.loading.dismiss();
 
   }

   async presentLoading() {
		this.loading = await this._loadingCtrl.create({
		   message: 'Carregando ...'
		});
		return await this.loading.present();
  }

   async presentAlert() {
    const alert = await this._alertCtrl.create({
      header: "Cadastrado com Sucesso!",
      buttons: [{text: 'OK'}]
    });

    await alert.present();
  }

  async presentFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Falha na conexão",
      message: 'Não foi possível cadastrar o usuário. Tente novamente.',
      buttons: [{ text: "Estou ciente!" }]
    });

    await alert.present();
  }
  
  async presentPasswordFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Senhas diferentes",
      buttons: [{text: 'OK'}]
    });

    await alert.present();
  }

}