import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Usuario} from '../../../domain/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public data;
  public http;
  public usuario: Usuario;
  public usuarioLogado: Usuario;
  public loading: any;

  constructor(public navCtrl: NavController, public _alertCtrl: AlertController, private _loadingCtrl: LoadingController, http: Http) { 

    this.data={};
    this.data.response = '';
    this.http = http;
    this.usuario = new Usuario (null, null,  null, null, null);
    

  }

  ngOnInit() {
  }

  async submit(){
    await this.presentLoading();
    var link = 'https://viniciusvillar.000webhostapp.com/vite/page/login_ionic';
    var data = JSON.stringify({email: this.usuario.email, password: this.usuario.password});

    //iniciando a conexão http para cadastro via JSON
    this.http.post(link, data) 
    .subscribe(data =>{
      console.log(data);
      this.data.response = data._body;
      //console.log (this.data.response);
      var res = this.data.response.split("|");

      if(res[1] == "sucesso"){
        res = res[0].split("*");
        sessionStorage.setItem("usuarioId",res[0]);
        sessionStorage.setItem("usuarioName", res[1]);
        sessionStorage.setItem("usuarioLogado",this.usuario.email);
        sessionStorage.setItem("flagLogado","sim");
        window.localStorage.setItem("usuarioLogado",this.usuario.email);
        window.localStorage.setItem("flagLogado","sim");

        this.navCtrl.navigateRoot('/tabs/(home:home)');
      }
      else
      if(res[0] == "Email ou senha inválidos"){
        console.log("Login ou Senha inválidos");
        
        this.presentFailAlert();
      }
    }, error =>{
      console.log("Ocorreu algum erro!");

    });
    await this.loading.dismiss();
  }
  
  async presentLoading() {
		this.loading = await this._loadingCtrl.create({
		   message: 'Carregando ...'
		});
		return await this.loading.present();
  }

  async presentFailAlert() {
    const alert = await this._alertCtrl.create({
      header: "Erro",
      message: 'E-mail ou senha inválidos!',
      buttons: [{ text: 'Ok!' }]
    });

    await alert.present();
  }

}
