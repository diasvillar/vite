import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';

import { Restaurante } from '../../../domain/restaurante/restaurante';
import { Cart } from '../../../domain/cart/cart';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.page.html',
  styleUrls: ['./order-cart.page.scss'],
})
export class OrderCartPage implements OnInit {

  public restaurante: Restaurante;
  public cart: Cart;

  constructor(    

      private route: ActivatedRoute,
      private router: Router,
      public navCtrl: NavController,
      public _alertCtrl: AlertController
    
    ) {

      this.route.queryParams.subscribe(params => {
        this.restaurante = new Restaurante(null, null, null, null, null, null);
        this.restaurante.id = params["id"];
        this.restaurante.nome = params ["nome"];
        this.restaurante.telefone = params["telefone"];
        this.restaurante.imgurl = params["imgurl"];
        this.restaurante.imgtopo = params["imgtopo"];
        this.restaurante.endereco = params["endereco"];      
      });
      this.cart = new Cart(null,null,null,null,null,null,null,null,null);
    }

  ngOnInit() {

    console.log(sessionStorage.getItem('usuarioId'));
    console.log(sessionStorage.getItem('usuarioName'));
    console.log(sessionStorage.getItem('usuarioLogado'));

    if(sessionStorage.getItem('flagLogado')!="sim"){
      this.goToLogin();
    }
    if(sessionStorage.getItem('cart')){
      console.log(sessionStorage.getItem('cart'))
      this.cart = JSON.parse(sessionStorage.getItem('cart'));

    }
    else{
      console.log("Carrinho vazio");
    } 

  }

  goToLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  clearCart(){
    sessionStorage.removeItem('cart');
    this.seleciona(this.restaurante);
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

  goToCart(restaurante){
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
			this.router.navigate(['/order-cart'],  navigationExtras);
			//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
	}

  increaseQuantity(index) {

    this.cart.pedidos[index].quantidade += 1;
    if(this.cart.pedidos[index].cardapio  != null){
      this.cart.valor_total += +this.cart.pedidos[index].cardapio.preco + +this.cart.pedidos[index].acrescimoTotal;
    }
    else{
      this.cart.valor_total += +this.cart.pedidos[index].cardapioGeral.preco + +this.cart.pedidos[index].acrescimoTotal;
    }

    sessionStorage.setItem("cart", JSON.stringify(this.cart)); 

  }
  decreaseQuantity(index) {

    this.cart.pedidos[index].quantidade -= 1;

    if (this.cart.pedidos[index].quantidade < 1){
      if (this.cart.pedidos[index].cardapio != null){
        this.cart.valor_total -= (+this.cart.pedidos[index].cardapio.preco + +this.cart.pedidos[index].acrescimoTotal);
      }
      else{
        this.cart.valor_total -= (+this.cart.pedidos[index].cardapioGeral.preco + +this.cart.pedidos[index].acrescimoTotal);
      }
      this.cart.pedidos.splice(index, 1);

      if(this.cart.pedidos.length === 0){
        this.clearCart();
      }else{
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
        this.goToCart(this.restaurante);
      }
    }else{
      if (this.cart.pedidos[index].cardapio != null){
        this.cart.valor_total -= (+this.cart.pedidos[index].cardapio.preco + +this.cart.pedidos[index].acrescimoTotal);
      }
      else{
        this.cart.valor_total -= (+this.cart.pedidos[index].cardapioGeral.preco + +this.cart.pedidos[index].acrescimoTotal);
        
      }
    }

    sessionStorage.setItem("cart", JSON.stringify(this.cart));

  }

  goToEndOrder(restaurante){
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
			this.router.navigate(['/order-end'],  navigationExtras);
			//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
  }
  
  selecionaCafe(cardapioCafe, restaurante){
		console.log('Entrou na Action seleciona');
		let navigationExtras: NavigationExtras = {
			queryParams: {
				"id" : restaurante.id,
				"nome" : restaurante.nome,
				"telefone" : restaurante.telefone,
				"imgurl" : restaurante.imgurl,
				"imgtopo" : restaurante.imgtopo,
				"endereco" : restaurante.endereco,
				"cardapioCafeId": cardapioCafe.id,
				"cardapioCafeRestauranteId": cardapioCafe.restaurante_id,
				"cardapioCafeCategoriaSuperior": cardapioCafe.categoria_superior,
				"cardapioCafeDescricaoCategoria": cardapioCafe.descricao_categoria,
				"cardapioCafeNome": cardapioCafe.nome,
				"cardapioCafePreco": cardapioCafe.preco,
				"cardapioCafeDescricaoSubCategoria": cardapioCafe.descricao_sub_categoria,
				"tipo": 0
			}
		};
		console.log(JSON.stringify(navigationExtras));
		this.router.navigate(['/item'],  navigationExtras);
		//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
	}

  selecionaGeral(cardapioGeral, restaurante){
		console.log('Entrou na Action seleciona');
		let navigationExtras: NavigationExtras = {
			queryParams: {
				"id" : restaurante.id,
				"nome" : restaurante.nome,
				"telefone" : restaurante.telefone,
				"imgurl" : restaurante.imgurl,
				"imgtopo" : restaurante.imgtopo,
				"endereco" : restaurante.endereco,
				"cardapioGeralId": cardapioGeral.id,
				"cardapioGeralRestauranteId": cardapioGeral.restaurante_id,
				"cardapioGeralCategoria": cardapioGeral.categoria,
				"cardapioGeralDescricao": cardapioGeral.descricao,
				"cardapioGeralNome": cardapioGeral.nome,
				"cardapioGeralPreco": cardapioGeral.preco,
				"cardapioGeralImgUrl": cardapioGeral.img_url,
				"cardapioGeralTempo": cardapioGeral.tempo,
				"cardapioGeralTempoMin": cardapioGeral.tempo_min,
				"cardapioGeralTempoMax": cardapioGeral.tempo_max,
				"tipo": 1
			}
		};
		console.log(JSON.stringify(navigationExtras));
		this.router.navigate(['/item'],  navigationExtras);
		//this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
	}

}
