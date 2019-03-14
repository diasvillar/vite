(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-restaurant-module"],{

/***/ "./src/app/restaurant/restaurant.module.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.module.ts ***!
  \*************************************************/
/*! exports provided: RestaurantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantPageModule", function() { return RestaurantPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _restaurant_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant.page */ "./src/app/restaurant/restaurant.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _restaurant_page__WEBPACK_IMPORTED_MODULE_5__["RestaurantPage"]
    }
];
var RestaurantPageModule = /** @class */ (function () {
    function RestaurantPageModule() {
    }
    RestaurantPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_restaurant_page__WEBPACK_IMPORTED_MODULE_5__["RestaurantPage"]]
        })
    ], RestaurantPageModule);
    return RestaurantPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/restaurant.page.html":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\t<div class=\"header-buttons\">\n\t\t<ion-anchor (click)=\"close()\"><ion-icon src=\"assets/images/x-icon.svg\"></ion-icon></ion-anchor>\n\t\t<ion-anchor (click)=\"goToCart(restaurante)\"><ion-icon src=\"assets/images/ic_cart.svg\"></ion-icon></ion-anchor>\n\t</div>\n\t<img src=\"{{restaurante.imgtopo}}\" class=\"bg-image\">\n\t<div class=\"content\">\n\t\t<div class=\"item-title\">\n\t\t\t<div class=\"page-header\">{{restaurante.nome}}</div>\n\t\t\t<ion-anchor (click)=\"goToAbout(restaurante)\" class=\"item-button\">\n\t\t\t\t<ion-icon name=\"f-info\"></ion-icon>\n\t\t\t</ion-anchor>\n\t\t</div>\n\t\t<div class=\"page-sub-header\">{{restaurante.endereco}}</div>\n\t\t<!--<ion-input placeholder=\"Buscar\"></ion-input>-->\n\t\t<div class=\"categories\">\n\t\t\t<ion-segment ([ngModel])=\"segment\">\n\t\t\t\t<ion-segment-button value=\"Bebidas\" (click)=\"selectedBebidas()\">\n\t\t\t\t\tBebidas\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Cafés\" (click)=\"selectedCafes()\">\n\t\t\t\t\tCafés\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button *ngIf=\"restaurante.id == '1'\"  value=\"Cafés Da Manhã\" (click)=\"selectedCafesDaManha()\">\n\t\t\t\t\tCafés Da Manhã\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Chás\" (click)=\"selectedChas()\">\n\t\t\t\t\tChás\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Chocolates\" (click)=\"selectedChocolates()\">\n\t\t\t\t\tChocolates\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Coquetéis\" (click)=\"selectedCoqueteis()\">\n\t\t\t\t\tCoquetéis\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Doces\" (click)=\"selectedDoces()\">\n\t\t\t\t\tDoces\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Espressos\" (click)=\"selectedEspressos()\">\n\t\t\t\t\tEspressos\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button *ngIf=\"restaurante.id == '1'\" value=\"Petiscos\" (click)=\"selectedPetiscos()\">\n\t\t\t\t\tPetiscos\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Pratos\" (click)=\"selectedPratos()\">\n\t\t\t\t\tPratos\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Salgados\" (click)=\"selectedSalgados()\">\n\t\t\t\t\tSalgados\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Sanduíches\" (click)=\"selectedSanduiches()\">\n\t\t\t\t\tSanduíches\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Shakes\" (click)=\"selectedShakes()\">\n\t\t\t\t\tShakes\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Smoothies\" (click)=\"selectedSmoothies()\">\n\t\t\t\t\tSmoothies\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t</div>\n\t\t<div *ngFor=\"let cardapioGeral of cardapiosGeral\">\n\t\t\t<div *ngIf=\"(segment === 'Smoothies' && cardapioGeral.categoria === 'Smoothies') && !estaIndisp(cardapioGeral.id, cardapioGeral.categoria)\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t\n\t\t\t<div *ngIf=\"(segment === 'Shakes' && (cardapioGeral.categoria === 'Shake sem Café' || cardapioGeral.categoria === 'Shake com Café'))&& !estaIndisp(cardapioGeral.id, cardapioGeral.categoria)\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{cardapioGeral.nome}}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"(segment === 'Sanduíches' && cardapioGeral.categoria === 'Sanduíches') && !estaIndisp(cardapioGeral.id, cardapioGeral.categoria)\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"(segment === 'Salgados' && cardapioGeral.categoria === 'Salgados') && !estaIndisp(cardapioGeral.id, cardapioGeral.categoria)\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Pratos' && (cardapioGeral.categoria === 'Prato' || cardapioGeral.categoria === 'Salada')\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Petiscos' && cardapioGeral.categoria === 'Petiscos'\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Espressos' && (cardapioGeral.categoria === 'Espresso' || cardapioGeral.categoria === 'Bebida com Espresso')\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Doces' && (cardapioGeral.categoria === 'Doce' || cardapioGeral.categoria === 'Bolo')\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Coquetéis' && (cardapioGeral.categoria === 'Coquetel' || cardapioGeral.categoria === 'Drinque Octavio' || cardapioGeral.categoria === 'Dose')\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Chocolates' && cardapioGeral.categoria === 'Chocolates'\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"segment === 'Chás' && cardapioGeral.categoria === 'Chás'\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\n\t\t\t<div *ngIf=\"segment === 'Cafés Da Manhã' && cardapioGeral.categoria === 'Cafés Da Manhã'\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"restaurante.id == 1\">\n\t\t\t\t<div *ngIf=\"segment === 'Bebidas' && (cardapioGeral.categoria === 'Bebida' || cardapioGeral.categoria === 'Cerveja' || cardapioGeral.categoria === 'Suco')\">\n\t\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"restaurante.id != 1\">\n\t\t\t\t<div *ngIf=\"segment === 'Bebidas' && (cardapioGeral.categoria === 'Bebida' || cardapioGeral.categoria === 'Cerveja' || cardapioGeral.categoria === 'Suco' || cardapioGeral.categoria === 'Suco D-Tox')\">\n\t\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaGeral(cardapioGeral, restaurante)\">\n\t\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t\t<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">\n\t\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioGeral.nome }}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioGeral.preco}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioGeral.descricao}} </div>\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">* Tempo de preparo: {{cardapioGeral.tempo}} minutos </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div *ngFor=\"let cardapioCafe of cardapiosCafe\">\n\t\t\t<div *ngIf=\"segment === 'Cafés'\">\n\t\t\t\t<ion-list class=\"item-list\" lines=\"none\">\n\t\t\t\t\t<ion-item button no-padding (click)=\"selecionaCafe(cardapioCafe, restaurante)\">\n\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t<!--<img src=\"{{cardapioGeral.img_url}}\" class=\"thumb\">-->\n\t\t\t\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t\t\t\t<div class=\"title\">{{ cardapioCafe.nome }} ({{ cardapioCafe.categoria_superior }})</div>\n\t\t\t\t\t\t\t\t<div class=\"price\">R${{cardapioCafe.preco}}</div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">{{cardapioCafe.descricao_sub_categoria}} </div>\n\t\t\t\t\t\t\t\t<div class=\"desc\">* Entrega após 5 minutos da chegada no estabelecimento </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/restaurant/restaurant.page.scss":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .item-title .item-button {\n    color: var(--ion-color-medium);\n    font-size: 25px; }\n  .item-list ion-item {\n  --inner-padding-end: 0px; }\n  .item-list ion-item .info {\n    width: 100%;\n    padding-bottom: 1rem;\n    display: flex;\n    justify-content: space-between; }\n  .item-list ion-item .info .thumb {\n      background: var(--ion-color-medium-tint);\n      min-width: 60px;\n      height: 60px;\n      display: flex;\n      border-radius: 5px; }\n  .item-list ion-item .info .item-content {\n      width: calc(100% - 50px);\n      margin-left: 1rem;\n      font-size: 14px; }\n  .item-list ion-item .info .item-content .title {\n        color: var(--ion-color-dark);\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 0.1rem; }\n  .item-list ion-item .info .item-content .price {\n        color: var(--ion-color-primary);\n        font-size: 16px;\n        margin-bottom: 0.5rem; }\n  .item-list ion-item .info .item-content .desc {\n        color: var(--ion-color-dark-tint);\n        margin-bottom: 0.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFxyZXN0YXVyYW50XFxyZXN0YXVyYW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCLEVBSzlCO0VBUkQ7SUFLRSwrQkFBOEI7SUFDOUIsZ0JBQWUsRUFDZjtFQUdGO0VBRUUseUJBQW9CLEVBa0NwQjtFQXBDRjtJQUlHLFlBQVc7SUFDWCxxQkFBb0I7SUFDcEIsY0FBYTtJQUNiLCtCQUE4QixFQTRCOUI7RUFuQ0g7TUFTSSx5Q0FBd0M7TUFDeEMsZ0JBQWU7TUFDZixhQUFZO01BQ1osY0FBYTtNQUNiLG1CQUFrQixFQUNsQjtFQWRKO01BZ0JJLHlCQUF3QjtNQUN4QixrQkFBaUI7TUFDakIsZ0JBQWUsRUFnQmY7RUFsQ0o7UUFvQkssNkJBQTRCO1FBQzVCLGdCQUFlO1FBQ2Ysa0JBQWlCO1FBQ2pCLHNCQUFxQixFQUNyQjtFQXhCTDtRQTBCSyxnQ0FBK0I7UUFDL0IsZ0JBQWU7UUFDZixzQkFBcUIsRUFDckI7RUE3Qkw7UUErQkssa0NBQWlDO1FBQ2pDLHNCQUFxQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS10aXRsZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHQuaXRlbS1idXR0b24ge1xyXG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG5cdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdH1cclxufVxyXG5cclxuLml0ZW0tbGlzdCB7XHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LmluZm8ge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDFyZW07XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0LnRodW1iIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG5cdFx0XHRcdG1pbi13aWR0aDogNjBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lml0ZW0tY29udGVudCB7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucHJpY2Uge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmRlc2Mge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/restaurant/restaurant.page.ts":
/*!***********************************************!*\
  !*** ./src/app/restaurant/restaurant.page.ts ***!
  \***********************************************/
/*! exports provided: RestaurantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantPage", function() { return RestaurantPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/restaurante/restaurante */ "./src/domain/restaurante/restaurante.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RestaurantPage = /** @class */ (function () {
    function RestaurantPage(navCtrl, _http, _loadingCtrl, _alertCtrl, route, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.route = route;
        this.router = router;
        this.itens = [, , , , , , , ,];
        this.pedido = 0;
        this.route.queryParams.subscribe(function (params) {
            _this.restaurante = new _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_5__["Restaurante"](null, null, null, null, null, null, null);
            _this.restaurante.id = params["id"];
            _this.restaurante.nome = params["nome"];
            _this.restaurante.telefone = params["telefone"];
            _this.restaurante.imgurl = params["imgurl"];
            _this.restaurante.imgtopo = params["imgtopo"];
            _this.restaurante.endereco = params["endereco"];
        });
        this.urlCategoria = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_categorias_cardapio/";
        this.url = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cardapio_cafe_json/" + this.restaurante.id;
        this.urlGeral = "https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cardapio_geral_json/" + this.restaurante.id;
        this.urlIndisponivel = "https://viniciusvillar.000webhostapp.com/vite/restaurante/get_cardapio_indisponivel_novo_2/" + this.restaurante.id;
        this.segment = "Cafés";
    }
    RestaurantPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (sessionStorage.getItem('flagLogado') != "sim") {
                            this.goToLogin();
                        }
                        this.presentLoading();
                        return [4 /*yield*/, this._http
                                .get(this.urlCategoria)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                                .toPromise()
                                .then(function (categorias) {
                                //var teste = JSON.stringify(categorias);
                                _this.categorias = categorias;
                            })
                                .catch(function (err) {
                                console.log(err);
                                _this.loading.dismiss();
                                _this.presentFailAlert();
                                _this.close();
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._http
                                .get(this.urlIndisponivel)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                                .toPromise()
                                .then(function (indisponiveis) {
                                //var teste = JSON.stringify(categorias);
                                _this.indisponiveis = indisponiveis;
                                console.log("indisponíveis: " + JSON.stringify(indisponiveis) + "\n\n");
                            })
                                .catch(function (err) {
                                console.log(err);
                                _this.loading.dismiss();
                                _this.presentFailAlert();
                                _this.close();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this._http
                                .get(this.url)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                                .toPromise()
                                .then(function (cardapiosCafe) {
                                //var teste = JSON.stringify(cardapiosCafe);
                                _this.cardapiosCafe = cardapiosCafe;
                                console.log("cardapiosCafe: " + JSON.stringify(cardapiosCafe) + "\n\n");
                            })
                                .catch(function (err) {
                                console.log(err);
                                _this.loading.dismiss();
                                _this.presentFailAlert();
                                _this.close();
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this._http
                                .get(this.urlGeral)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                                .toPromise()
                                .then(function (cardapiosGeral) {
                                //var testeGeral = JSON.stringify(cardapiosGeral);
                                _this.cardapiosGeral = cardapiosGeral;
                                _this.loading.dismiss();
                            })
                                .catch(function (err) {
                                console.log(err);
                                if (_this.loading != undefined)
                                    _this.loading.dismiss();
                                _this.presentFailAlert();
                                _this.close();
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestaurantPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    RestaurantPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._loadingCtrl.create({
                                message: 'Buscando Cardápio. Aguarde ...'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    RestaurantPage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: 'Falha na conexão',
                            buttons: [{ text: 'OK, estou ciente' }],
                            message: "Não foi possível obter o cardápio. Tente mais tarde."
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestaurantPage.prototype.selectedSmoothies = function () {
        this.segment = "Smoothies";
    };
    RestaurantPage.prototype.selectedShakes = function () {
        this.segment = "Shakes";
    };
    RestaurantPage.prototype.selectedSanduiches = function () {
        this.segment = "Sanduíches";
    };
    RestaurantPage.prototype.selectedSalgados = function () {
        this.segment = "Salgados";
    };
    RestaurantPage.prototype.selectedPratos = function () {
        this.segment = "Pratos";
    };
    RestaurantPage.prototype.selectedPetiscos = function () {
        this.segment = "Petiscos";
    };
    RestaurantPage.prototype.selectedEspressos = function () {
        this.segment = "Espressos";
    };
    RestaurantPage.prototype.selectedDoces = function () {
        this.segment = "Doces";
    };
    RestaurantPage.prototype.selectedCoqueteis = function () {
        this.segment = "Coquetéis";
    };
    RestaurantPage.prototype.selectedChocolates = function () {
        this.segment = "Chocolates";
    };
    RestaurantPage.prototype.selectedCafesDaManha = function () {
        this.segment = "Cafés Da Manhã";
    };
    RestaurantPage.prototype.selectedBebidas = function () {
        this.segment = "Bebidas";
    };
    RestaurantPage.prototype.selectedCafes = function () {
        this.segment = "Cafés";
    };
    RestaurantPage.prototype.selectedChas = function () {
        this.segment = "Chás";
    };
    RestaurantPage.prototype.selecionaCafe = function (cardapioCafe, restaurante) {
        var navigationExtras = {
            queryParams: {
                "id": restaurante.id,
                "nome": restaurante.nome,
                "telefone": restaurante.telefone,
                "imgurl": restaurante.imgurl,
                "imgtopo": restaurante.imgtopo,
                "endereco": restaurante.endereco,
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
        this.router.navigate(['/item'], navigationExtras);
    };
    RestaurantPage.prototype.selecionaGeral = function (cardapioGeral, restaurante) {
        var navigationExtras = {
            queryParams: {
                "id": restaurante.id,
                "nome": restaurante.nome,
                "telefone": restaurante.telefone,
                "imgurl": restaurante.imgurl,
                "imgtopo": restaurante.imgtopo,
                "endereco": restaurante.endereco,
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
        this.router.navigate(['/item'], navigationExtras);
    };
    RestaurantPage.prototype.goToCart = function (restaurante) {
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
    };
    RestaurantPage.prototype.goToAbout = function (restaurante) {
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
        this.router.navigate(['/about'], navigationExtras);
    };
    RestaurantPage.prototype.close = function () {
        if (sessionStorage.getItem('cart')) {
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
            sessionStorage.removeItem('cart');
        }
        this.navCtrl.navigateRoot('/tabs/(home:home)');
    };
    RestaurantPage.prototype.estaIndisp = function (id, segment) {
        for (var x = 0; x < this.indisponiveis.length; x++) {
            if (this.indisponiveis[x].categoria == segment) {
                for (var y = 0; y < this.indisponiveis[x].items.length; y++) {
                    if (id == this.indisponiveis[x].items[y].id)
                        return true;
                }
            }
        }
    };
    RestaurantPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! ./restaurant.page.html */ "./src/app/restaurant/restaurant.page.html"),
            styles: [__webpack_require__(/*! ./restaurant.page.scss */ "./src/app/restaurant/restaurant.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RestaurantPage);
    return RestaurantPage;
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
//# sourceMappingURL=restaurant-restaurant-module.js.map