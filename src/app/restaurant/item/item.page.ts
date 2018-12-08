import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';

import { Restaurante } from '../../../domain/restaurante/restaurante';
import { CardapioCafe } from '../../../domain/cardapioCafe/cardapioCafe';
import { CardapioGeral } from '../../../domain/cardapioGeral/cardapioGeral';
import { Pedido } from '../../../domain/pedido/pedido';
import { Cart } from '../../../domain/cart/cart';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  public restaurante: Restaurante;
  public cardapioCafe: CardapioCafe;
  public cardapioGeral: CardapioGeral;
  public pedido: Pedido;
  public cart: Cart;
  public pedidos: Pedido[] = [];
  public content : Boolean;

  public radioData: string;
  imagem: string;
  tipo: number;
  numPrato: number;
  obs: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
    public _alertCtrl: AlertController,
    //http: Http, 
    ) { 
    this.route.queryParams.subscribe(params => {
			this.restaurante = new Restaurante(null, null, null, null, null, null);
			this.restaurante.id = params["id"];
			this.restaurante.nome = params ["nome"];
			this.restaurante.telefone = params["telefone"];
			this.restaurante.imgurl = params["imgurl"];
			this.restaurante.imgtopo = params["imgtopo"];
      this.restaurante.endereco = params["endereco"];
      this.tipo = params["tipo"];
      
      if(this.tipo == 0){
        this.cardapioCafe = new CardapioCafe(null, null, null, null, null, null, null);
        this.cardapioCafe.id = params["cardapioCafeId"];
        this.cardapioCafe.restaurante_id = params["cardapioCafeRestauranteId"];
        this.cardapioCafe.categoria_superior = params["cardapioCafeCategoriaSuperior"];
        this.cardapioCafe.descricao_categoria = params["cardapioCafeDescricaoCategoria"];
        this.cardapioCafe.nome = params["cardapioCafeNome"];
        this.cardapioCafe.preco = params["cardapioCafePreco"];
        this.cardapioCafe.descricao_sub_categoria = params["cardapioCafeDescricaoSubCategoria"];
        this.imagem = this.restaurante.imgurl;
        this.radioData = "Prensa Francesa";
      }
      else{
        this.cardapioGeral = new CardapioGeral(null, null, null, null, null, null, null, null, null, null);
        this.cardapioGeral.id = params["cardapioGeralId"];
        this.cardapioGeral.restaurante_id = params["cardapioGeralRestauranteId"];
        this.cardapioGeral.categoria = params["cardapioGeralCategoria"];
        this.cardapioGeral.descricao = params["cardapioGeralDescricao"];
        this.cardapioGeral.img_url = params["cardapioGeralImgUrl"];
        this.cardapioGeral.nome = params["cardapioGeralNome"];
        this.cardapioGeral.preco = params["cardapioGeralPreco"];
        this.cardapioGeral.tempo = params["cardapioGeralTempo"];
        this.cardapioGeral.tempo_min = params["cardapioGeralTempoMin"];
        this.cardapioGeral.tempo_max = params["cardapioGeralTempoMax"];
        this.imagem = this.cardapioGeral.img_url;
        if(this.cardapioGeral.nome === "Refrigerantes"){
          this.radioData = "Coca-Cola";
        }
      }
    });
    //this.radioData = "Coca-Cola";
    this.pedido = new Pedido(null,null,null,null,null);
    this.cart = new Cart(null,null,null,null,null,null,null,null,null);
    this.pedido.cardapio = this.cardapioCafe;
    this.pedido.cardapioGeral = this.cardapioGeral;
    this.numPrato = 1;
    
  }

  ngOnInit() {

    if(sessionStorage.getItem('flagLogado')!="sim"){
      this.goToLogin();
    }

    if(this.pedido.cardapio  != null){
      this.content = true;
    }
    else{
      this.content = false;
     // this.radioData = null;
    }
  }

  goToLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  seleciona(restaurante){
		console.log('Entrou na Action seleciona');
		console.log("\n endereco: " + restaurante.endereco + "\n");
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
  
  addCart(){
    if(sessionStorage.getItem('cart')){
     // console.log(sessionStorage.getItem('cart'))
      this.cart = JSON.parse(sessionStorage.getItem('cart'));

      if(!this.pedidos){
        console.log("Entrou no If 0")
        this.cart = new Cart(null,null,null,null,null,null,null,null,null);
      }
    }
    else{
      console.log("Carrinho vazio");
    } 
   if(this.cart.pedidos==null || this.cart.pedidos.length == 0){
     this.pedido.quantidade = this.numPrato;
     //this.cart.metodo = this.radioData;
     this.pedido.metodo = this.radioData;
     this.pedido.observacao = this.obs;
     this.pedidos[0] = this.pedido;
     this.cart.pedidos = this.pedidos;
     if(this.pedido.cardapio  != null){
        this.cart.valor_total = this.pedido.cardapio.preco;
     }
     else{
        this.cart.valor_total = this.pedido.cardapioGeral.preco;
     }
     this.cart.usuario = sessionStorage.getItem('usuarioId');
     this.cart.nome = sessionStorage.getItem('usuarioName');
     this.cart.email = sessionStorage.getItem('usuarioLogado');

     sessionStorage.setItem("cart", JSON.stringify(this.cart));

     console.log(sessionStorage.getItem('cart'))

   }else
   if(this.cart.pedidos.length>0){
     let flag=true;
     if(this.pedido.cardapio  != null){
        this.cart.pedidos.forEach((cardapio) => {
          if(cardapio.cardapio != null){
            if(cardapio.cardapio.id == this.pedido.cardapio.id && cardapio.metodo == this.radioData){
              console.log("pedido já se encontra no carrinho");
              flag=false;
            }
          }
        });
      }
      else{
        this.cart.pedidos.forEach((cardapio) => {

          if(cardapio.cardapio == null){
            //console.log(JSON.stringify(cardapioGeral) + "\n\n");
            
            if(cardapio.cardapioGeral.id == this.pedido.cardapioGeral.id && cardapio.metodo == this.radioData){
              console.log("pedido já se encontra no carrinho");
              flag=false;
            }    
          }
        });

      }
     
     if(flag){
       this.pedido.quantidade = this.numPrato;
       let arrayIndex = this.cart.pedidos.length;
       if(this.pedido.cardapio  != null){
          this.cart.valor_total = this.cart.valor_total*1 + this.pedido.cardapio.preco*1;
       }
       else{
          this.cart.valor_total = this.cart.valor_total*1 + this.pedido.cardapioGeral.preco*1;
       }
       //this.cart.metodo = this.radioData;
       this.pedido.metodo = this.radioData;
       this.pedido.observacao = this.obs;
       this.cart.pedidos[arrayIndex] = this.pedido;     
       sessionStorage.setItem("cart", JSON.stringify(this.cart));
     }
     //console.log("radioData: " + this.radioData + "\n\n");
     console.log(sessionStorage.getItem('cart'))
   }
   this.seleciona(this.restaurante);
  }
  
  increaseQuantity(index) {
    this.numPrato += 1;
  }
  
  decreaseQuantity(index) {
    if(index <= 1){
      this.seleciona(this.restaurante);
    }
    else{
      this.numPrato -= 1;
    }    
  }

}
