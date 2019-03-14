(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-item-item-module"],{

/***/ "./src/app/restaurant/item/item.module.ts":
/*!************************************************!*\
  !*** ./src/app/restaurant/item/item.module.ts ***!
  \************************************************/
/*! exports provided: ItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item.page */ "./src/app/restaurant/item/item.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_5__["ItemPage"]
    }
];
var ItemPageModule = /** @class */ (function () {
    function ItemPageModule() {
    }
    ItemPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_item_page__WEBPACK_IMPORTED_MODULE_5__["ItemPage"]]
        })
    ], ItemPageModule);
    return ItemPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/item/item.page.html":
/*!************************************************!*\
  !*** ./src/app/restaurant/item/item.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\t<div class=\"header-buttons\">\n\t\t<ion-anchor (click)=\"seleciona(restaurante)\"><ion-icon src=\"assets/images/arrow-back.svg\"></ion-icon></ion-anchor>\n\t\t<ion-anchor (click)=\"goToCart(restaurante)\"><ion-icon src=\"assets/images/ic_cart.svg\"></ion-icon></ion-anchor>\n\t</div>\n\n\t<div *ngIf=\"tipo == 0\">\n\t\t<img src=\"{{restaurante.imgtopo}}\" class=\"bg-image\">\n\t\t<div class=\"content\" >\n\t\t\t<div class=\"item-title\">\n\t\t\t\t<div class=\"page-header\">{{ cardapioCafe.nome }} ({{ cardapioCafe.categoria_superior }})</div>\n\t\t\t\t<div class=\"item-price\">R${{cardapioCafe.preco}}</div>\n\t\t\t</div>\n\t\t\t<p class=\"item-desc\">{{cardapioCafe.descricao_sub_categoria}}</p>\n\t\t\t<p class=\"item-sub-title\"><b>Método de Preparo</b></p>\n\t\t\t<div class=\"cc-selector\">\n\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t<ion-radio-group name=\"metodos\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"prensa\" type=\"radio\" name=\"metodos\" value=\"Prensa Francesa\" checked></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Prensa Francesa</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"clever\" type=\"radio\" name=\"metodos\" value=\"Clever\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Clever</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"turco\" type=\"radio\" name=\"metodos\" value=\"Turco\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Turco</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"hario\" type=\"radio\" name=\"metodos\" value=\"Hario V60\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Hario V60</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"pano\" type=\"radio\" name=\"metodos\" value=\"Coador de Pano\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Coador de Pano</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio  slot=\"start\" color=\"success\" id=\"kalita\" type=\"radio\" name=\"metodos\" value=\"Kalita\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Kalita</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"chemex\" type=\"radio\" name=\"metodos\" value=\"Chemex\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Chemex</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"cafeor\" type=\"radio\" name=\"metodos\" value=\"Cafeor\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Cafeor</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"syphon\" type=\"radio\" name=\"metodos\" value=\"Syphon\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Syphon Coffee</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"moka\" type=\"radio\" name=\"metodos\" value=\"Moka\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Moka</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"aeropress\" type=\"radio\" name=\"metodos\" value=\"Aeropress\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Aeropress</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-radio-group>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t\t<p class=\"item-sub-title\"><b>Observações</b></p>\n\t\t\t<ion-textarea [(ngModel)]=\"obs\" name=\"observacao\" placeholder=\"Deseja fazer alguma observação?\"></ion-textarea>\n\t\t\t<div class=\"add-item\">\n\t\t\t\t<div class=\"component-quantity\">\n\t\t\t\t\t<div class=\"minus\"><ion-icon name=\"f-minus\" (click)=\"decreaseQuantity(numPrato)\"></ion-icon></div>\n\t\t\t\t\t<div class=\"number\">{{numPrato}}</div>\n\t\t\t\t\t<div class=\"plus\"><ion-icon name=\"f-plus\" (click)=\"increaseQuantity(numPrato)\"></ion-icon></div>\n\t\t\t\t</div>\n\t\t\t\t<ion-button color=\"primary\" shape=\"round\" fill=\"outline\" size=\"small\" (click)=\"addAndGo()\">Adicionar</ion-button>\n\t\t\t</div>\n\t\t\t<div class=\"footer-buttons\">\n\t\t\t\t<ion-button (click)=\"seleciona(restaurante)\" color=\"medium\">Continuar Pedindo</ion-button>\n\t\t\t\t<ion-button (click)=\"goToEndOrder(restaurante)\" color=\"primary\">Finalizar Pedido</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"tipo == 1\">\n\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"bg-image\">\n\t\t<div class=\"content\" >\n\t\t\t<div class=\"item-title\">\n\t\t\t\t<div class=\"page-header\">{{cardapioGeral.nome}}</div>\n\t\t\t\t<div class=\"item-price\">R${{valorTela}}</div>\n\t\t\t</div>\n\t\t\t<p class=\"item-desc\">{{cardapioGeral.descricao}}</p>\n\t\t\t<p class=\"item-desc-time\">*Horário de pedido entre {{cardapioGeral.tempo_min}} e {{cardapioGeral.tempo_max}}</p>\n\t\t\t\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Refrigerantes' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Refrigerante</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"refrigerantes\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"coca\" type=\"radio\" name=\"refrigerantes\" value=\"Coca-Cola\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Coca-Cola</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"cocaZero\" type=\"radio\" name=\"refrigerantes\" value=\"Coca-Cola Zero\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Coca-Cola Zero</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"guarana\" type=\"radio\" name=\"refrigerantes\" value=\"Guaraná Antarctica\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Guaraná Antarctica</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"guaranaZero\" type=\"radio\" name=\"refrigerantes\" value=\"Guaraná Antarctica Zero\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Guaraná Antarctica Zero</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"fanta\" type=\"radio\" name=\"refrigerantes\" value=\"Fanta Laranja\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Fanta Laranja</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio  slot=\"start\" color=\"success\" id=\"sprite\" type=\"radio\" name=\"refrigerantes\" value=\"Sprite\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Sprite</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Água' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Água</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"agua\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"aguaCGas\" type=\"radio\" name=\"agua\" value=\"Água com Gás\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Água com Gás</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"aguaSGas\" type=\"radio\" name=\"agua\" value=\"Água sem Gás\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Água sem Gás</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Cervejas Especiais' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Cerveja</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"cervejaE\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"erdinger\" type=\"radio\" name=\"cervejaE\" value=\"Erdinger\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Erdinger</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"paulistania\" type=\"radio\" name=\"cervejaE\" value=\"Paulistânia\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Paulistânia</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Cervejas Premium' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Cerveja</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"cervejaP\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"heineken\" type=\"radio\" name=\"cervejaP\" value=\"Heineken\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Heineken</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"stella\" type=\"radio\" name=\"cervejaP\" value=\"Stella Artois\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Stella Artois</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Chocolate Gelado' || cardapioGeral.nome == 'Chocolate Quente' || cardapioGeral.nome == 'Choco Spicy'\">\n\t\t\t\t<p class=\"item-sub-title\"><b>Leite</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"chocolate\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"leiteI\" type=\"radio\" name=\"chocolate\" value=\"Leite Integral\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Leite Integral</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"leiteD\" type=\"radio\" name=\"chocolate\" value=\"Leite Desnatadpo\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Leite Desnatadpo</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"leiteS\" type=\"radio\" name=\"chocolate\" value=\"Leite de Soja\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Leite de Soja</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"leiteA\" type=\"radio\" name=\"chocolate\" value=\"Leite de Amêndoas\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Leite de Amêndoas</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"  id=\"leiteC\" type=\"radio\" name=\"chocolate\" value=\"Leite de Coco\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Leite de Coco</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Irish Coffee' || cardapioGeral.nome == 'Preto' || cardapioGeral.nome == 'Verde' || cardapioGeral.nome == 'Vermelho' || cardapioGeral.nome == 'Hortelã' || cardapioGeral.nome == 'Capim Santo' || cardapioGeral.nome == 'Chá da Fazenda' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Temperatura</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"cha\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"quente\" type=\"radio\" name=\"cha\" value=\"Quente\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Quente</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"gelado\" type=\"radio\" name=\"cha\" value=\"Gelado\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Gelado</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Pão de Queijo' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Tipo</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"salgado\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"tradicional\" type=\"radio\" name=\"salgado\" value=\"Tradicional\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Tradicional</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"multigrao\" type=\"radio\" name=\"salgado\" value=\"Multigrão\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Multigrão</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Ovos Mexidos' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Queijo</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"ovo\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"queijoB\" type=\"radio\" name=\"ovo\" value=\"Queijo Branco\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Queijo Branco</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"queijoP\" type=\"radio\" name=\"ovo\" value=\"Queijo Parmesão\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Queijo Parmesão</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Ovos Benedict' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Acompanhamento</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"ovo\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"salmao\" type=\"radio\" name=\"ovo\" value=\"Salmão\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Salmão</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"presunto\" type=\"radio\" name=\"ovo\" value=\"Presunto de Parma\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Presunto de Parma</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Mineirinho' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Pão Francês</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"pao\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"paoT\" type=\"radio\" name=\"pao\" value=\"Pão Francês Tradicional\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Pão Francês Tradicional</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"paoI\" type=\"radio\" name=\"pao\" value=\"Pão Francês Integral\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Pão Francês Integral</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Fraldinha' || cardapioGeral.nome == 'Salmão Defumado'\">\n\t\t\t\t<p class=\"item-sub-title\"><b>Acompanhamento</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"sanduba\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"salada\" type=\"radio\" name=\"sanduba\" value=\"Salada\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Salada</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"chips\" type=\"radio\" name=\"sanduba\" value=\"Chips de Batata\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Chips de Batata</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Bruschetta' \">\n\t\t\t\t<p class=\"item-sub-title\"><b>Sabor</b></p>\t\n\t\t\t\t<div class=\"cc-selector\">\t\t\n\t\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t\t<ion-radio-group name=\"petisco\" ngDefaultControl [(ngModel)]=\"radioData\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"napolitana\" type=\"radio\" name=\"petisco\" value=\"Napolitana\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Napolitana</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" id=\"queijo\" type=\"radio\" name=\"petisco\" value=\"Queijo Brie, Geléia e Amêndoas\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Queijo Brie, Geléia e Amêndoas</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Amaretto' || cardapioGeral.nome == 'Caramelo Brûlé' || cardapioGeral.nome == 'Menta Café' || cardapioGeral.nome == 'Orgeat' || cardapioGeral.nome == 'Mocha' || cardapioGeral.nome == 'Proteico'\">\n\t\t\t\t<p class=\"item-sub-title\"><b>Adicionais</b></p>\t\n\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"leite\" (ionChange)=\"updateLeite()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Leite</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"chantilly\" (ionChange)=\"updateChantilly()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Chantilly</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"nutella\" (ionChange)=\"updateNutella()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Nutella</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"doceLeite\" (ionChange)=\"updateDoceLeite()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Doce de Leite</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Bolo Octavio' || cardapioGeral.nome == 'Coco Gelado' || cardapioGeral.nome == 'Cenoura' || cardapioGeral.nome == 'Bolo de Chocolate' || cardapioGeral.nome == 'Maçã com Banana' || cardapioGeral.nome == 'Red Velvet' || cardapioGeral.nome == 'Fubá Cremoso'\">\n\t\t\t\t<p class=\"item-sub-title\"><b>Adicionais</b></p>\t\n\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"sorvete\" (ionChange)=\"updateSorvete()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Sorvete</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"chantilly\" (ionChange)=\"updateChantilly()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Chantilly</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"nutella\" (ionChange)=\"updateNutella()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Nutella</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"doceLeite\" (ionChange)=\"updateDoceLeite()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Doce de Leite</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"caldaChocolate\" (ionChange)=\"updateCaldaChocolate()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Calda de Chocolate</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"caramelo\" (ionChange)=\"updateCaramelo()\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Caramelo</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\">+R$5,00</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Pastel'\">\n\t\t\t\t<p class=\"item-sub-title\"><b>Escolha até 2 sabores</b></p>\t\n\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"carne\" [disabled]=\"!carne && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Carne</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"queijo\" [disabled]=\"!queijo && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Queijo</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"camarao\" [disabled]=\"!camarao && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Camarão com Requeijão</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"cardapioGeral.nome == 'Mix de Pães de Queijo'\">\n\t\t\t\t<p class=\"item-sub-title\"><b>Escolha até 2 sabores</b></p>\t\n\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"tradicional\" [disabled]=\"!tradicional && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Tradicional</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"multigrao\" [disabled]=\"!multigrao && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Multigrãos</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"gorgonzola\" [disabled]=\"!gorgonzola && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Gorgonzola</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"chocolate\" [disabled]=\"!chocolate && maxNo\" (ionChange)=\"onChange($event.target.checked)\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Chocolate Belga</ion-label>\n\t\t\t\t\t\t<ion-note slot=\"end\"></ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\n\t\t\t<p class=\"item-sub-title\"><b>Observações</b></p>\n\t\t\t<ion-textarea [(ngModel)]=\"obs\" name=\"observacao\" placeholder=\"Deseja fazer alguma observação?\"></ion-textarea>\n\t\t\t<div class=\"add-item\">\n\t\t\t\t<div class=\"component-quantity\">\n\t\t\t\t\t<div class=\"minus\"><ion-icon name=\"f-minus\" (click)=\"decreaseQuantity(numPrato)\"></ion-icon></div>\n\t\t\t\t\t<div class=\"number\">{{numPrato}}</div>\n\t\t\t\t\t<div class=\"plus\"><ion-icon name=\"f-plus\" (click)=\"increaseQuantity(numPrato)\"></ion-icon></div>\n\t\t\t\t</div>\n\t\t\t\t<ion-button color=\"primary\" shape=\"round\" fill=\"outline\" size=\"small\" (click)=\"addAndGo()\">Adicionar</ion-button>\n\t\t\t</div>\n\t\t\t<div class=\"footer-buttons\">\n\t\t\t\t<ion-button (click)=\"seleciona(restaurante)\" color=\"medium\">Continuar Pedindo</ion-button>\n\t\t\t\t<ion-button (click)=\"goToEndOrder(restaurante)\" color=\"primary\">Finalizar Pedido</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/restaurant/item/item.page.scss":
/*!************************************************!*\
  !*** ./src/app/restaurant/item/item.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .item-title .item-price {\n    color: var(--ion-color-primary);\n    font-size: 20px; }\n  .item-desc {\n  color: var(--ion-color-medium);\n  font-size: 14px; }\n  .item-desc-time {\n  color: var(--ion-color-medium);\n  font-size: 12px; }\n  .item-sub-title {\n  color: var(--ion-color-dark);\n  font-size: 15px;\n  margin-bottom: 0.5rem; }\n  .list-itens {\n  padding: 0px;\n  padding-bottom: 0.5rem; }\n  .list-itens ion-item {\n    --inner-padding-end: 0px;\n    --color: var(--ion-color-medium);\n    --min-height: unset;\n    height: 30px; }\n  .list-itens ion-item ion-checkbox {\n      --border-color: var(--ion-color-medium);\n      --border-width: 1.5px;\n      margin: 0px 0.6rem 0px 0px; }\n  .list-itens ion-item ion-note {\n      font-size: 15px;\n      padding: 0.8rem 0px 0px 0px; }\n  .add-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n  .add-item .component-quantity {\n    width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9pdGVtL0M6XFxEZXNlbnZvbHZpbWVudG9cXGlvbmljXFxGcm9udEVuZC1WaXRlVjIvc3JjXFxhcHBcXHJlc3RhdXJhbnRcXGl0ZW1cXGl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEIsRUFLOUI7RUFSRDtJQUtFLGdDQUErQjtJQUMvQixnQkFBZSxFQUNmO0VBR0Y7RUFDQywrQkFBOEI7RUFDOUIsZ0JBQWUsRUFDZjtFQUNEO0VBQ0MsK0JBQThCO0VBQzlCLGdCQUFlLEVBQ2Y7RUFDRDtFQUNDLDZCQUE0QjtFQUM1QixnQkFBZTtFQUNmLHNCQUFxQixFQUNyQjtFQUNEO0VBQ0MsYUFBWTtFQUNaLHVCQUFzQixFQWdCdEI7RUFsQkQ7SUFJRSx5QkFBb0I7SUFDcEIsaUNBQVE7SUFDUixvQkFBYTtJQUNiLGFBQVksRUFVWjtFQWpCRjtNQVNHLHdDQUFlO01BQ2Ysc0JBQWU7TUFDZiwyQkFBMEIsRUFDMUI7RUFaSDtNQWNHLGdCQUFlO01BQ1osNEJBQTJCLEVBQzlCO0VBSUg7RUFDQyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDhCQUE2QixFQUk3QjtFQVBEO0lBS0UsYUFBWSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudC9pdGVtL2l0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0Lml0ZW0tcHJpY2Uge1xyXG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5pdGVtLWRlc2Mge1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLml0ZW0tZGVzYy10aW1lIHtcclxuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pdGVtLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5saXN0LWl0ZW5zIHtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuXHRpb24taXRlbSB7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRpb24tY2hlY2tib3gge1xyXG5cdFx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuXHRcdFx0bWFyZ2luOiAwcHggMC42cmVtIDBweCAwcHg7XHJcblx0XHR9XHJcblx0XHRpb24tbm90ZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdCAgICBwYWRkaW5nOiAwLjhyZW0gMHB4IDBweCAwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uYWRkLWl0ZW0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHQuY29tcG9uZW50LXF1YW50aXR5IHtcclxuXHRcdHdpZHRoOiAxMjBweDtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/restaurant/item/item.page.ts":
/*!**********************************************!*\
  !*** ./src/app/restaurant/item/item.page.ts ***!
  \**********************************************/
/*! exports provided: ItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPage", function() { return ItemPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/restaurante/restaurante */ "./src/domain/restaurante/restaurante.ts");
/* harmony import */ var _domain_cardapioCafe_cardapioCafe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domain/cardapioCafe/cardapioCafe */ "./src/domain/cardapioCafe/cardapioCafe.ts");
/* harmony import */ var _domain_cardapioGeral_cardapioGeral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../domain/cardapioGeral/cardapioGeral */ "./src/domain/cardapioGeral/cardapioGeral.ts");
/* harmony import */ var _domain_pedido_pedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../domain/pedido/pedido */ "./src/domain/pedido/pedido.ts");
/* harmony import */ var _domain_cart_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../domain/cart/cart */ "./src/domain/cart/cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemPage = /** @class */ (function () {
    function ItemPage(route, router, navCtrl, _alertCtrl) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.pedidos = [];
        this.acrescimo = "Acrescimo:";
        this.sabor = "Sabor:";
        this.maxNo = false;
        this.amt = 0;
        this.route.queryParams.subscribe(function (params) {
            _this.restaurante = new _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_3__["Restaurante"](null, null, null, null, null, null, null);
            _this.restaurante.id = params["id"];
            _this.restaurante.nome = params["nome"];
            _this.restaurante.telefone = params["telefone"];
            _this.restaurante.imgurl = params["imgurl"];
            _this.restaurante.imgtopo = params["imgtopo"];
            _this.restaurante.endereco = params["endereco"];
            _this.tipo = params["tipo"];
            if (_this.tipo == 0) {
                _this.cardapioCafe = new _domain_cardapioCafe_cardapioCafe__WEBPACK_IMPORTED_MODULE_4__["CardapioCafe"](null, null, null, null, null, null, null);
                _this.cardapioCafe.id = params["cardapioCafeId"];
                _this.cardapioCafe.restaurante_id = params["cardapioCafeRestauranteId"];
                _this.cardapioCafe.categoria_superior = params["cardapioCafeCategoriaSuperior"];
                _this.cardapioCafe.descricao_categoria = params["cardapioCafeDescricaoCategoria"];
                _this.cardapioCafe.nome = params["cardapioCafeNome"];
                _this.cardapioCafe.preco = params["cardapioCafePreco"];
                _this.cardapioCafe.descricao_sub_categoria = params["cardapioCafeDescricaoSubCategoria"];
                _this.imagem = _this.restaurante.imgurl;
                _this.radioData = "Prensa Francesa";
                _this.valorTela = +_this.cardapioCafe.preco;
            }
            else {
                _this.cardapioGeral = new _domain_cardapioGeral_cardapioGeral__WEBPACK_IMPORTED_MODULE_5__["CardapioGeral"](null, null, null, null, null, null, null, null, null, null);
                _this.cardapioGeral.id = params["cardapioGeralId"];
                _this.cardapioGeral.restaurante_id = params["cardapioGeralRestauranteId"];
                _this.cardapioGeral.categoria = params["cardapioGeralCategoria"];
                _this.cardapioGeral.descricao = params["cardapioGeralDescricao"];
                _this.cardapioGeral.img_url = params["cardapioGeralImgUrl"];
                _this.cardapioGeral.nome = params["cardapioGeralNome"];
                _this.cardapioGeral.preco = params["cardapioGeralPreco"];
                _this.cardapioGeral.tempo = params["cardapioGeralTempo"];
                _this.cardapioGeral.tempo_min = params["cardapioGeralTempoMin"];
                _this.cardapioGeral.tempo_max = params["cardapioGeralTempoMax"];
                _this.imagem = _this.cardapioGeral.img_url;
                _this.valorTela = +_this.cardapioGeral.preco;
                if (_this.cardapioGeral.nome === "Refrigerantes") {
                    _this.radioData = "Coca-Cola";
                }
                else if (_this.cardapioGeral.nome === "Água") {
                    _this.radioData = "Água com Gás";
                }
                else if (_this.cardapioGeral.nome === "Cervejas Especiais") {
                    _this.radioData = "Erdinger";
                }
                else if (_this.cardapioGeral.nome === "Cervejas Premium") {
                    _this.radioData = "Heineken";
                }
                else if (_this.cardapioGeral.nome === "Chocolate Gelado" || _this.cardapioGeral.nome === "Chocolate Quente" || _this.cardapioGeral.nome === "Choco Spicy") {
                    _this.radioData = "Leite Integral";
                }
                else if (_this.cardapioGeral.nome === "Preto" || _this.cardapioGeral.nome === "Verde" || _this.cardapioGeral.nome === "Vermelho" || _this.cardapioGeral.nome === "Hortelã" || _this.cardapioGeral.nome === "Capim Santo" || _this.cardapioGeral.nome === "Chá da Fazenda" || _this.cardapioGeral.nome === "Irish Coffee") {
                    _this.radioData = "Quente";
                }
                else if (_this.cardapioGeral.nome === "Pão de Queijo") {
                    _this.radioData = "Tradicional";
                }
                else if (_this.cardapioGeral.nome === "Ovos Mexidos") {
                    _this.radioData = "Queijo Branco";
                }
                else if (_this.cardapioGeral.nome === "Ovos Benedict") {
                    _this.radioData = "Salmão";
                }
                else if (_this.cardapioGeral.nome === "Mineirinho") {
                    _this.radioData = "Pão Francês Tradicional";
                }
                else if (_this.cardapioGeral.nome === "Fraldinha" || _this.cardapioGeral.nome === "Salmão Defumado") {
                    _this.radioData = "Salada";
                }
                else if (_this.cardapioGeral.nome === "Bruschetta") {
                    _this.radioData = "Napolitana";
                }
                else {
                    _this.radioData = "";
                }
            }
        });
        //this.radioData = "Coca-Cola";
        this.pedido = new _domain_pedido_pedido__WEBPACK_IMPORTED_MODULE_6__["Pedido"](null, null, null, null, null, null);
        this.cart = new _domain_cart_cart__WEBPACK_IMPORTED_MODULE_7__["Cart"](null, null, null, null, null, null, null, null, null, null, null);
        this.cart.id = this.restaurante.id;
        this.pedido.cardapio = this.cardapioCafe;
        this.pedido.cardapioGeral = this.cardapioGeral;
        this.pedido.acrescimoTotal = 0;
        this.obs = "";
        this.numPrato = 1;
    }
    ItemPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('flagLogado') != "sim") {
            this.goToLogin();
        }
        if (this.pedido.cardapio != null) {
            this.content = true;
        }
        else {
            this.content = false;
            // this.radioData = null;
        }
    };
    ItemPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    ItemPage.prototype.seleciona = function (restaurante) {
        console.log('Entrou na Action seleciona');
        console.log("\n endereco: " + restaurante.endereco + "\n");
        var navigationExtras = {
            queryParams: {
                "id": restaurante.id,
                "nome": restaurante.nome,
                "telefone": restaurante.telefone,
                "imgurl": restaurante.imgurl,
                "imgtopo": restaurante.imgtopo,
                "endereco": restaurante.endereco
            }
        };
        console.log(JSON.stringify(navigationExtras));
        this.router.navigate(['/restaurant'], navigationExtras);
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    ItemPage.prototype.goToCart = function (restaurante) {
        console.log('Entrou na Action seleciona');
        console.log("\n endereco: " + restaurante.endereco + "\n");
        var navigationExtras = {
            queryParams: {
                "id": restaurante.id,
                "nome": restaurante.nome,
                "telefone": restaurante.telefone,
                "imgurl": restaurante.imgurl,
                "imgtopo": restaurante.imgtopo,
                "endereco": restaurante.endereco
            }
        };
        console.log(JSON.stringify(navigationExtras));
        this.router.navigate(['/order-cart'], navigationExtras);
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    ItemPage.prototype.addCart = function () {
        var _this = this;
        if (sessionStorage.getItem('cart')) {
            // console.log(sessionStorage.getItem('cart'))
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
            if (!this.pedidos) {
                console.log("Entrou no If 0");
                this.cart = new _domain_cart_cart__WEBPACK_IMPORTED_MODULE_7__["Cart"](null, null, null, null, null, null, null, null, null, null, null);
            }
        }
        else {
            console.log("Carrinho vazio");
        }
        this.pedido.quantidade = this.numPrato;
        this.pedido.observacao = this.obs;
        if (this.pedido.cardapio != null) {
            this.cart.valor_total = this.cart.valor_total * 1 + (this.pedido.cardapio.preco * this.pedido.quantidade);
            if (this.leite) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Leite |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.chantilly) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Chantilly |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.nutella) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Nutella |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.doceLeite) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Doce de Leite |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.sorvete) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Sorvete |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.caldaChocolate) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Calda de Chocolate |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.caramelo) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Caramelo |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.carne) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Carne |";
            }
            if (this.queijo) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Queijo |";
            }
            if (this.camarao) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Camarão com Requeijão |";
            }
            if (this.tradicional) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Tradicional |";
            }
            if (this.multigrao) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Multigrãos |";
            }
            if (this.gorgonzola) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Gorgonzola |";
            }
            if (this.chocolate) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Chocolate Belga |";
            }
        }
        else {
            this.cart.valor_total = this.cart.valor_total * 1 + (this.pedido.cardapioGeral.preco * this.pedido.quantidade);
            if (this.leite) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Leite |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.chantilly) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Chantilly |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.nutella) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Nutella |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.doceLeite) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Doce de Leite |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.sorvete) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Sorvete |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.caldaChocolate) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Calda de Chocolate |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.caramelo) {
                this.cart.valor_total += (5 * this.pedido.quantidade);
                this.acrescimo += "| Caramelo |";
                this.pedido.acrescimoTotal += 5;
            }
            if (this.carne) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Carne |";
            }
            if (this.queijo) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Queijo |";
            }
            if (this.camarao) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Camarão com Requeijão |";
            }
            if (this.tradicional) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Tradicional |";
            }
            if (this.multigrao) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Multigrãos |";
            }
            if (this.gorgonzola) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Gorgonzola |";
            }
            if (this.chocolate) {
                //this.cart.valor_total += (5*this.pedido.quantidade);
                this.sabor += "| Chocolate Belga |";
            }
        }
        if (this.leite || this.chantilly || this.nutella || this.doceLeite || this.sorvete || this.caramelo || this.caldaChocolate) {
            this.pedido.metodo = this.acrescimo;
        }
        else if (this.carne || this.queijo || this.camarao || this.chocolate || this.tradicional || this.multigrao || this.gorgonzola) {
            this.pedido.metodo = this.sabor;
        }
        else {
            this.pedido.metodo = this.radioData;
        }
        if (this.cart.pedidos == null || this.cart.pedidos.length == 0) {
            this.pedidos[0] = this.pedido;
            this.cart.pedidos = this.pedidos;
            this.cart.usuario = sessionStorage.getItem('usuarioId');
            this.cart.nome = sessionStorage.getItem('usuarioName');
            this.cart.email = sessionStorage.getItem('usuarioLogado');
            sessionStorage.setItem("cart", JSON.stringify(this.cart));
            console.log(sessionStorage.getItem('cart'));
        }
        else if (this.cart.pedidos.length > 0) {
            var flag_1 = true;
            if (this.pedido.cardapio != null) {
                this.cart.pedidos.forEach(function (cardapio) {
                    if (cardapio.cardapio != null) {
                        if (cardapio.cardapio.id == _this.pedido.cardapio.id && (cardapio.metodo == _this.radioData || cardapio.metodo == _this.acrescimo || cardapio.metodo == _this.sabor)) {
                            console.log("pedido já se encontra no carrinho");
                            flag_1 = false;
                        }
                    }
                });
            }
            else {
                this.cart.pedidos.forEach(function (cardapio) {
                    if (cardapio.cardapio == null) {
                        //console.log(JSON.stringify(cardapioGeral) + "\n\n");
                        if (cardapio.cardapioGeral.id == _this.pedido.cardapioGeral.id && (cardapio.metodo == _this.radioData || cardapio.metodo == _this.acrescimo || cardapio.metodo == _this.sabor)) {
                            console.log("pedido já se encontra no carrinho");
                            flag_1 = false;
                        }
                    }
                });
            }
            if (flag_1) {
                var arrayIndex = this.cart.pedidos.length;
                this.cart.pedidos[arrayIndex] = this.pedido;
                sessionStorage.setItem("cart", JSON.stringify(this.cart));
            }
            //console.log("radioData: " + this.radioData + "\n\n");
            console.log(sessionStorage.getItem('cart'));
        }
    };
    ItemPage.prototype.addAndGo = function () {
        this.addCart();
        this.seleciona(this.restaurante);
    };
    ItemPage.prototype.goToEndOrder = function (restaurante) {
        console.log('Entrou na Action seleciona');
        console.log("\n endereco: " + restaurante.endereco + "\n");
        var navigationExtras = {
            queryParams: {
                "id": restaurante.id,
                "nome": restaurante.nome,
                "telefone": restaurante.telefone,
                "imgurl": restaurante.imgurl,
                "imgtopo": restaurante.imgtopo,
                "endereco": restaurante.endereco
            }
        };
        console.log(JSON.stringify(navigationExtras));
        this.addCart();
        this.router.navigate(['/order-end'], navigationExtras);
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    ItemPage.prototype.increaseQuantity = function (index) {
        this.numPrato += 1;
        if (this.pedido.cardapio != null) {
            this.valorTela += +this.cardapioCafe.preco;
        }
        else {
            this.valorTela += +this.cardapioGeral.preco;
        }
        if (this.leite) {
            this.valorTela += 5;
        }
        if (this.chantilly) {
            this.valorTela += 5;
        }
        if (this.nutella) {
            this.valorTela += 5;
        }
        if (this.doceLeite) {
            this.valorTela += 5;
        }
        if (this.sorvete) {
            this.valorTela += 5;
        }
        if (this.caldaChocolate) {
            this.valorTela += 5;
        }
        if (this.caramelo) {
            this.valorTela += 5;
        }
    };
    ItemPage.prototype.decreaseQuantity = function (index) {
        if (index <= 1) {
            this.seleciona(this.restaurante);
        }
        else {
            this.numPrato -= 1;
            if (this.pedido.cardapio != null) {
                this.valorTela -= +this.cardapioCafe.preco;
            }
            else {
                this.valorTela -= +this.cardapioGeral.preco;
            }
            if (this.leite) {
                this.valorTela -= 5;
            }
            if (this.chantilly) {
                this.valorTela -= 5;
            }
            if (this.nutella) {
                this.valorTela -= 5;
            }
            if (this.doceLeite) {
                this.valorTela -= 5;
            }
            if (this.sorvete) {
                this.valorTela -= 5;
            }
            if (this.caldaChocolate) {
                this.valorTela -= 5;
            }
            if (this.caramelo) {
                this.valorTela -= 5;
            }
        }
    };
    ItemPage.prototype.updateLeite = function () {
        if (this.leite) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.updateChantilly = function () {
        if (this.chantilly) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.updateNutella = function () {
        if (this.nutella) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.updateDoceLeite = function () {
        if (this.doceLeite) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.updateSorvete = function () {
        if (this.sorvete) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.updateCaldaChocolate = function () {
        if (this.caldaChocolate) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.updateCaramelo = function () {
        if (this.caramelo) {
            this.valorTela += (5 * this.numPrato);
        }
        else {
            this.valorTela -= (5 * this.numPrato);
        }
    };
    ItemPage.prototype.onChange = function (isChecked) {
        if (isChecked)
            this.amt++;
        else
            this.amt--;
        this.amt === 2 ? this.maxNo = true : this.maxNo = false;
    };
    ItemPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.page.html */ "./src/app/restaurant/item/item.page.html"),
            styles: [__webpack_require__(/*! ./item.page.scss */ "./src/app/restaurant/item/item.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ItemPage);
    return ItemPage;
}());



/***/ }),

/***/ "./src/domain/cardapioCafe/cardapioCafe.ts":
/*!*************************************************!*\
  !*** ./src/domain/cardapioCafe/cardapioCafe.ts ***!
  \*************************************************/
/*! exports provided: CardapioCafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioCafe", function() { return CardapioCafe; });
var CardapioCafe = /** @class */ (function () {
    function CardapioCafe(id, restaurante_id, categoria_superior, descricao_categoria, nome, preco, descricao_sub_categoria) {
        this.id = id;
        this.restaurante_id = restaurante_id;
        this.categoria_superior = categoria_superior;
        this.descricao_categoria = descricao_categoria;
        this.nome = nome;
        this.preco = preco;
        this.descricao_sub_categoria = descricao_sub_categoria;
    }
    return CardapioCafe;
}());



/***/ }),

/***/ "./src/domain/cardapioGeral/cardapioGeral.ts":
/*!***************************************************!*\
  !*** ./src/domain/cardapioGeral/cardapioGeral.ts ***!
  \***************************************************/
/*! exports provided: CardapioGeral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioGeral", function() { return CardapioGeral; });
var CardapioGeral = /** @class */ (function () {
    function CardapioGeral(id, restaurante_id, categoria, descricao, nome, preco, img_url, tempo, tempo_min, tempo_max) {
        this.id = id;
        this.restaurante_id = restaurante_id;
        this.categoria = categoria;
        this.descricao = descricao;
        this.nome = nome;
        this.preco = preco;
        this.img_url = img_url;
        this.tempo = tempo;
        this.tempo_min = tempo_min;
        this.tempo_max = tempo_max;
    }
    return CardapioGeral;
}());



/***/ }),

/***/ "./src/domain/pedido/pedido.ts":
/*!*************************************!*\
  !*** ./src/domain/pedido/pedido.ts ***!
  \*************************************/
/*! exports provided: Pedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
var Pedido = /** @class */ (function () {
    function Pedido(cardapio, cardapioGeral, quantidade, metodo, observacao, acrescimoTotal) {
        this.cardapio = cardapio;
        this.cardapioGeral = cardapioGeral;
        this.quantidade = quantidade;
        this.metodo = metodo;
        this.observacao = observacao;
        this.acrescimoTotal = acrescimoTotal;
    }
    return Pedido;
}());



/***/ }),

/***/ "./src/domain/restaurante/restaurante.ts":
/*!***********************************************!*\
  !*** ./src/domain/restaurante/restaurante.ts ***!
  \***********************************************/
/*! exports provided: Restaurante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurante", function() { return Restaurante; });
var Restaurante = /** @class */ (function () {
    function Restaurante(id, nome, telefone, imgurl, imgtopo, endereco, ativo) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.imgurl = imgurl;
        this.imgtopo = imgtopo;
        this.endereco = endereco;
        this.ativo = ativo;
    }
    return Restaurante;
}());



/***/ })

}]);
//# sourceMappingURL=restaurant-item-item-module.js.map