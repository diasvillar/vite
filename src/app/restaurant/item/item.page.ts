import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";

import { Restaurante } from '../../../domain/restaurante/restaurante';
import { CardapioCafe } from '../../../domain/cardapioCafe/cardapioCafe';
import { CardapioGeral } from '../../../domain/cardapioGeral/cardapioGeral';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  public restaurante: Restaurante;
  public cardapioCafe: CardapioCafe;
  public cardapioGeral: CardapioGeral;
  imagem: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.route.queryParams.subscribe(params => {
			this.restaurante = new Restaurante(null, null, null, null, null, null);
			this.restaurante.id = params["id"];
			this.restaurante.nome = params ["nome"];
			this.restaurante.telefone = params["telefone"];
			this.restaurante.imgurl = params["imgurl"];
			this.restaurante.imgtopo = params["imgtopo"];
      this.restaurante.endereco = params["endereco"];
      
      if(params["endereco"] == 0){
        this.cardapioCafe = new CardapioCafe(null, null, null, null, null, null, null);
        this.cardapioCafe.id = params["cardapioCafeId"];
        this.cardapioCafe.restaurante_id = params["cardapioCafeRestauranteId"];
        this.cardapioCafe.categoria_superior = params["cardapioCafeCategoriaSuperior"];
        this.cardapioCafe.descricao_categoria = params["cardapioCafeDescricaoCategoria"];
        this.cardapioCafe.nome = params["cardapioCafeNome"];
        this.cardapioCafe.preco = params["cardapioCafePreco"];
        this.cardapioCafe.descricao_sub_categoria = params["cardapioCafeDescricaoSubCategoria"];
        this.imagem = this.restaurante.imgurl;
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
      }
		});
  }

  ngOnInit() {
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

}
