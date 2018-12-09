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
  leite: Boolean;
  chantilly: Boolean;
  nutella: Boolean;
  doceLeite: Boolean;
  sorvete: Boolean;
  caldaChocolate: Boolean;
  caramelo: Boolean;
  camarao: Boolean;
  carne: Boolean;
  queijo: Boolean;
  tradicional: Boolean;
  multigrao: Boolean;
  gorgonzola: Boolean;
  chocolate: Boolean;
  valorTela: number;
  acrescimo: string = "Acrescimo:";
  sabor: string = "Sabor:";
  maxNo = false;
  amt = 0;

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
        this.valorTela = +this.cardapioCafe.preco;
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
        this.valorTela = +this.cardapioGeral.preco;

        if(this.cardapioGeral.nome === "Refrigerantes"){
          this.radioData = "Coca-Cola";
        }else if(this.cardapioGeral.nome === "Água"){
                this.radioData = "Água com Gás";
              }else if(this.cardapioGeral.nome === "Cervejas Especiais"){
                this.radioData = "Erdinger";
                    }else if(this.cardapioGeral.nome === "Cervejas Premium"){
                      this.radioData = "Heineken";
                          }else if(this.cardapioGeral.nome === "Chocolate Gelado" || this.cardapioGeral.nome === "Chocolate Quente" || this.cardapioGeral.nome === "Choco Spicy"){
                            this.radioData = "Leite Integral";
                                }else if(this.cardapioGeral.nome === "Preto" || this.cardapioGeral.nome === "Verde" || this.cardapioGeral.nome === "Vermelho" || this.cardapioGeral.nome === "Hortelã" || this.cardapioGeral.nome === "Capim Santo" || this.cardapioGeral.nome === "Chá da Fazenda" || this.cardapioGeral.nome === "Irish Coffee"){
                                  this.radioData = "Quente";
                                      }else if(this.cardapioGeral.nome === "Pão de Queijo" ){
                                        this.radioData = "Tradicional";
                                            }else if(this.cardapioGeral.nome === "Ovos Mexidos" ){
                                              this.radioData = "Queijo Branco";
                                                  }else if(this.cardapioGeral.nome === "Ovos Benedict" ){
                                                    this.radioData = "Salmão";
                                                        }else if(this.cardapioGeral.nome === "Mineirinho" ){
                                                          this.radioData = "Pão Francês Tradicional";
                                                              }else if(this.cardapioGeral.nome === "Fraldinha" || this.cardapioGeral.nome === "Salmão Defumado" ){
                                                                this.radioData = "Salada";
                                                                    }else if(this.cardapioGeral.nome === "Bruschetta" ){
                                                                      this.radioData = "Napolitana";
                                                                          }else{
                                                                            this.radioData = "";
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

    this.pedido.quantidade = this.numPrato;
    this.pedido.observacao = this.obs;
    if(this.pedido.cardapio  != null){
      this.cart.valor_total = this.cart.valor_total*1 + (this.pedido.cardapio.preco * this.pedido.quantidade);
      if(this.leite){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Leite |";
      }
      if(this.chantilly){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Chantilly |";
      }
      if(this.nutella){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Nutella |";
      }
      if(this.doceLeite){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Doce de Leite |";
      }
      if(this.sorvete){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Sorvete |";
      }
      if(this.caldaChocolate){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Calda de Chocolate |";
      }
      if(this.caramelo){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Caramelo |";
      }
      if(this.carne){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Carne |";
      }
      if(this.queijo){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Queijo |";
      }
      if(this.camarao){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Camarão com Requeijão |";
      }
      if(this.tradicional){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Tradicional |";
      }
      if(this.multigrao){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Multigrãos |";
      }
      if(this.gorgonzola){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Gorgonzola |";
      }
      if(this.chocolate){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Chocolate Belga |";
      }
   }
   else{
      this.cart.valor_total = this.cart.valor_total*1 +  (this.pedido.cardapioGeral.preco * this.pedido.quantidade);
      if(this.leite){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Leite |";
      }
      if(this.chantilly){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Chantilly |";
      }
      if(this.nutella){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Nutella |";
      }
      if(this.doceLeite){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Doce de Leite |";
      }
      if(this.sorvete){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Sorvete |";
      }
      if(this.caldaChocolate){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Calda de Chocolate |";
      }
      if(this.caramelo){
        this.cart.valor_total += (5*this.pedido.quantidade);
        this.acrescimo += "| Caramelo |";
      }
      if(this.carne){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Carne |";
      }
      if(this.queijo){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Queijo |";
      }
      if(this.camarao){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Camarão com Requeijão |";
      }
      if(this.tradicional){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Tradicional |";
      }
      if(this.multigrao){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Multigrãos |";
      }
      if(this.gorgonzola){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Gorgonzola |";
      }
      if(this.chocolate){
        //this.cart.valor_total += (5*this.pedido.quantidade);
        this.sabor += "| Chocolate Belga |";
      }
    }

    if(this.leite || this.chantilly || this.nutella || this.doceLeite){
      this.pedido.metodo = this.acrescimo;
    }else if(this.carne || this.queijo || this.camarao || this.chocolate || this.tradicional || this.multigrao || this.gorgonzola){
            this.pedido.metodo = this.sabor;
          }else{ 
            this.pedido.metodo = this.radioData;
          }

   if(this.cart.pedidos==null || this.cart.pedidos.length == 0){

      this.pedidos[0] = this.pedido;
      this.cart.pedidos = this.pedidos;
      this.cart.usuario = sessionStorage.getItem('usuarioId');
      this.cart.nome = sessionStorage.getItem('usuarioName');
      this.cart.email = sessionStorage.getItem('usuarioLogado');

      sessionStorage.setItem("cart", JSON.stringify(this.cart));

      console.log(sessionStorage.getItem('cart'));

   }else
      if(this.cart.pedidos.length>0){
        let flag=true;
        if(this.pedido.cardapio  != null){
            this.cart.pedidos.forEach((cardapio) => {
              if(cardapio.cardapio != null){
                if(cardapio.cardapio.id == this.pedido.cardapio.id && (cardapio.metodo == this.radioData || cardapio.metodo == this.acrescimo || cardapio.metodo == this.sabor)){
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
                
                if(cardapio.cardapioGeral.id == this.pedido.cardapioGeral.id && (cardapio.metodo == this.radioData || cardapio.metodo == this.acrescimo || cardapio.metodo == this.sabor)){
                  console.log("pedido já se encontra no carrinho");
                  flag=false;
                }    
              }
            });

          }
        
        if(flag){

          let arrayIndex = this.cart.pedidos.length;
          this.cart.pedidos[arrayIndex] = this.pedido;     
          sessionStorage.setItem("cart", JSON.stringify(this.cart));
        }
        //console.log("radioData: " + this.radioData + "\n\n");
        console.log(sessionStorage.getItem('cart'));
      }
      this.seleciona(this.restaurante);
  }
  
  increaseQuantity(index) {
    this.numPrato += 1;
    if(this.pedido.cardapio  != null){
      this.valorTela += +this.cardapioCafe.preco;
    }
    else{
      this.valorTela += +this.cardapioGeral.preco;
    }

    if(this.leite){
      this.valorTela += 5;
    }
    if(this.chantilly){
      this.valorTela += 5;
    }
    if(this.nutella){
      this.valorTela += 5;
    }
    if(this.doceLeite){
      this.valorTela += 5;
    }
    if(this.sorvete){
      this.valorTela += 5;
    }
    if(this.caldaChocolate){
      this.valorTela += 5;
    }
    if(this.caramelo){
      this.valorTela += 5;
    }
  }
  
  decreaseQuantity(index) {
    if(index <= 1){
      this.seleciona(this.restaurante);
    }
    else{
      this.numPrato -= 1;
      if(this.pedido.cardapio  != null){
        this.valorTela -= +this.cardapioCafe.preco;
      }
      else{
        this.valorTela -= +this.cardapioGeral.preco;
      }
      if(this.leite){
        this.valorTela -= 5;
      }
      if(this.chantilly){
        this.valorTela -= 5;
      }
      if(this.nutella){
        this.valorTela -= 5;
      }
      if(this.doceLeite){
        this.valorTela -= 5;
      }
      if(this.sorvete){
        this.valorTela -= 5;
      }
      if(this.caldaChocolate){
        this.valorTela -= 5;
      }
      if(this.caramelo){
        this.valorTela -= 5;
      }
    }    
  }

  updateLeite(){
    if(this.leite){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }

  updateChantilly(){
    if(this.chantilly){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }

  updateNutella(){
    if(this.nutella){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }

  updateDoceLeite(){
    if(this.doceLeite){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }

  updateSorvete(){
    if(this.sorvete){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }

  updateCaldaChocolate(){
    if(this.caldaChocolate){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }

  updateCaramelo(){
    if(this.caramelo){
      this.valorTela += (5*this.numPrato);
    }
    else{
      this.valorTela -= (5*this.numPrato);
    }
  }
 
  onChange(isChecked: boolean) {
    if (isChecked)
      this.amt++
    else 
      this.amt--
    this.amt === 2 ? this.maxNo = true : this.maxNo = false;
  }

}
