(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-order-cart-order-cart-module"],{

/***/ "./src/app/restaurant/order-cart/order-cart.module.ts":
/*!************************************************************!*\
  !*** ./src/app/restaurant/order-cart/order-cart.module.ts ***!
  \************************************************************/
/*! exports provided: OrderCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCartPageModule", function() { return OrderCartPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _order_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-cart.page */ "./src/app/restaurant/order-cart/order-cart.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _order_cart_page__WEBPACK_IMPORTED_MODULE_5__["OrderCartPage"]
    }
];
var OrderCartPageModule = /** @class */ (function () {
    function OrderCartPageModule() {
    }
    OrderCartPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_cart_page__WEBPACK_IMPORTED_MODULE_5__["OrderCartPage"]]
        })
    ], OrderCartPageModule);
    return OrderCartPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/order-cart/order-cart.page.html":
/*!************************************************************!*\
  !*** ./src/app/restaurant/order-cart/order-cart.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\t<div class=\"header-buttons\">\n\t\t<ion-anchor (click)=\"seleciona(restaurante)\"><ion-icon src=\"assets/images/arrow-back.svg\"></ion-icon></ion-anchor>\n\t\t<a></a>\n\t</div>\n\t<img src=\"{{restaurante.imgtopo}}\" class=\"bg-image\">\n\t<div class=\"content\">\n\t\t<div class=\"page-header\">Carrinho</div>\n\t\t\n\t\t<div *ngIf=\"cart.pedidos === null\">\n\t\t\t<ion-list lines=\"none\" class=\"item-list\">\n\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\tSeu carrinho está vazio\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<div class=\"total\">\n\t\t\t\tValor total<br>\n\t\t\t\t<span class=\"price\">R$ -</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"cart.pedidos !== null\">\n\t\t\t<ion-list lines=\"none\" class=\"item-list\">\n\t\t\t\t<ion-item no-padding *ngFor=\"let pedido of cart.pedidos; let i = index;\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div *ngIf=\"pedido.cardapio != null\" (click)=\"selecionaCafe(pedido.cardapio, restaurante)\">\n\t\t\t\t\t\t\t {{pedido.cardapio.nome}}\n\t\t\t\t\t\t\t<p *ngIf='pedido.metodo != \"\"'>Obs: {{pedido.metodo}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"pedido.cardapio == null\" (click)=\"selecionaGeral(pedido.cardapioGeral, restaurante)\">\n\t\t\t\t\t\t\t {{pedido.cardapioGeral.nome}}\n\t\t\t\t\t\t\t<p *ngIf='pedido.metodo != \"\"'>Obs: {{pedido.metodo}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div slot=\"end\">\n\t\t\t\t\t\t<div class=\"component-quantity\">\n\t\t\t\t\t\t\t<div class=\"minus\"><ion-icon name=\"f-minus\" (click)=\"decreaseQuantity(i)\"></ion-icon></div>\n\t\t\t\t\t\t\t<div class=\"number\">{{pedido.quantidade}}</div>\n\t\t\t\t\t\t\t<div class=\"plus\"><ion-icon name=\"f-plus\" (click)=\"increaseQuantity(i)\"></ion-icon></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\n\t\t\t<div class=\"total\">\n\t\t\t\tValor total<br>\n\t\t\t\t<span class=\"price\">R${{cart.valor_total}}</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"footer-buttons\">\n\t\t\t<ion-button color=\"medium\" (click)=\"clearCart()\">Limpar Carrinho</ion-button>\n\t\t\t<ion-button (click)=\"goToEndOrder(restaurante)\" [disabled]=\"cart.pedidos === null\"  color=\"primary\">Finalizar Pedido</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/restaurant/order-cart/order-cart.page.scss":
/*!************************************************************!*\
  !*** ./src/app/restaurant/order-cart/order-cart.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-list ion-item {\n  margin-bottom: 0.7rem; }\n  .item-list ion-item .info {\n    color: var(--ion-color-dark-tint);\n    font-size: 13px; }\n  .item-list ion-item .info .price {\n      color: var(--ion-color-dark);\n      font-size: 14px; }\n  .item-list ion-item .component-quantity {\n    width: 95px; }\n  .total {\n  font-size: 15px;\n  margin-top: 0.5rem; }\n  .total .price {\n    color: var(--ion-color-primary);\n    font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9vcmRlci1jYXJ0L0M6XFxEZXNlbnZvbHZpbWVudG9cXGlvbmljXFxGcm9udEVuZC1WaXRlVjIvc3JjXFxhcHBcXHJlc3RhdXJhbnRcXG9yZGVyLWNhcnRcXG9yZGVyLWNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsc0JBQXFCLEVBWXJCO0VBZEY7SUFJRyxrQ0FBaUM7SUFDakMsZ0JBQWUsRUFLZjtFQVZIO01BT0ksNkJBQTRCO01BQzVCLGdCQUFlLEVBQ2Y7RUFUSjtJQVlHLFlBQVcsRUFDWDtFQUdIO0VBQ0MsZ0JBQWU7RUFDZixtQkFBa0IsRUFLbEI7RUFQRDtJQUlFLGdDQUErQjtJQUMvQixnQkFBZSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudC9vcmRlci1jYXJ0L29yZGVyLWNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tbGlzdCB7XHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG5cdFx0LmluZm8ge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0LnByaWNlIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmNvbXBvbmVudC1xdWFudGl0eSB7XHJcblx0XHRcdHdpZHRoOiA5NXB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4udG90YWwge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRtYXJnaW4tdG9wOiAwLjVyZW07XHJcblx0LnByaWNlIHtcclxuXHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/restaurant/order-cart/order-cart.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurant/order-cart/order-cart.page.ts ***!
  \**********************************************************/
/*! exports provided: OrderCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCartPage", function() { return OrderCartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/restaurante/restaurante */ "./src/domain/restaurante/restaurante.ts");
/* harmony import */ var _domain_cart_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domain/cart/cart */ "./src/domain/cart/cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderCartPage = /** @class */ (function () {
    function OrderCartPage(route, router, navCtrl, _alertCtrl) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.route.queryParams.subscribe(function (params) {
            _this.restaurante = new _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_3__["Restaurante"](null, null, null, null, null, null, null);
            _this.restaurante.id = params["id"];
            _this.restaurante.nome = params["nome"];
            _this.restaurante.telefone = params["telefone"];
            _this.restaurante.imgurl = params["imgurl"];
            _this.restaurante.imgtopo = params["imgtopo"];
            _this.restaurante.endereco = params["endereco"];
        });
        this.cart = new _domain_cart_cart__WEBPACK_IMPORTED_MODULE_4__["Cart"](null, null, null, null, null, null, null, null, null, null, null);
    }
    OrderCartPage.prototype.ngOnInit = function () {
        console.log(sessionStorage.getItem('usuarioId'));
        console.log(sessionStorage.getItem('usuarioName'));
        console.log(sessionStorage.getItem('usuarioLogado'));
        if (sessionStorage.getItem('flagLogado') != "sim") {
            this.goToLogin();
        }
        if (sessionStorage.getItem('cart')) {
            console.log(sessionStorage.getItem('cart'));
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
        }
        else {
            console.log("Carrinho vazio");
        }
    };
    OrderCartPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    OrderCartPage.prototype.clearCart = function () {
        sessionStorage.removeItem('cart');
        this.seleciona(this.restaurante);
    };
    OrderCartPage.prototype.seleciona = function (restaurante) {
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
    OrderCartPage.prototype.goToCart = function (restaurante) {
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
    OrderCartPage.prototype.increaseQuantity = function (index) {
        this.cart.pedidos[index].quantidade += 1;
        if (this.cart.pedidos[index].cardapio != null) {
            this.cart.valor_total += +this.cart.pedidos[index].cardapio.preco + +this.cart.pedidos[index].acrescimoTotal;
        }
        else {
            this.cart.valor_total += +this.cart.pedidos[index].cardapioGeral.preco + +this.cart.pedidos[index].acrescimoTotal;
        }
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
    };
    OrderCartPage.prototype.decreaseQuantity = function (index) {
        this.cart.pedidos[index].quantidade -= 1;
        if (this.cart.pedidos[index].quantidade < 1) {
            if (this.cart.pedidos[index].cardapio != null) {
                this.cart.valor_total -= (+this.cart.pedidos[index].cardapio.preco + +this.cart.pedidos[index].acrescimoTotal);
            }
            else {
                this.cart.valor_total -= (+this.cart.pedidos[index].cardapioGeral.preco + +this.cart.pedidos[index].acrescimoTotal);
            }
            this.cart.pedidos.splice(index, 1);
            if (this.cart.pedidos.length === 0) {
                this.clearCart();
            }
            else {
                sessionStorage.setItem("cart", JSON.stringify(this.cart));
                this.goToCart(this.restaurante);
            }
        }
        else {
            if (this.cart.pedidos[index].cardapio != null) {
                this.cart.valor_total -= (+this.cart.pedidos[index].cardapio.preco + +this.cart.pedidos[index].acrescimoTotal);
            }
            else {
                this.cart.valor_total -= (+this.cart.pedidos[index].cardapioGeral.preco + +this.cart.pedidos[index].acrescimoTotal);
            }
        }
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
    };
    OrderCartPage.prototype.goToEndOrder = function (restaurante) {
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
        this.router.navigate(['/order-end'], navigationExtras);
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    OrderCartPage.prototype.selecionaCafe = function (cardapioCafe, restaurante) {
        console.log('Entrou na Action seleciona');
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
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    OrderCartPage.prototype.selecionaGeral = function (cardapioGeral, restaurante) {
        console.log('Entrou na Action seleciona');
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
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    OrderCartPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-cart',
            template: __webpack_require__(/*! ./order-cart.page.html */ "./src/app/restaurant/order-cart/order-cart.page.html"),
            styles: [__webpack_require__(/*! ./order-cart.page.scss */ "./src/app/restaurant/order-cart/order-cart.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], OrderCartPage);
    return OrderCartPage;
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
//# sourceMappingURL=restaurant-order-cart-order-cart-module.js.map