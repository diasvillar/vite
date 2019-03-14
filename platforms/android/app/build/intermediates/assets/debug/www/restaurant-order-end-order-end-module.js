(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-order-end-order-end-module"],{

/***/ "./src/app/restaurant/order-end/order-end.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurant/order-end/order-end.module.ts ***!
  \**********************************************************/
/*! exports provided: OrderEndPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEndPageModule", function() { return OrderEndPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _order_end_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-end.page */ "./src/app/restaurant/order-end/order-end.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _order_end_page__WEBPACK_IMPORTED_MODULE_5__["OrderEndPage"]
    }
];
var OrderEndPageModule = /** @class */ (function () {
    function OrderEndPageModule() {
    }
    OrderEndPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_end_page__WEBPACK_IMPORTED_MODULE_5__["OrderEndPage"]]
        })
    ], OrderEndPageModule);
    return OrderEndPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/order-end/order-end.page.html":
/*!**********************************************************!*\
  !*** ./src/app/restaurant/order-end/order-end.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\t<div class=\"header-buttons\">\n\t\t<ion-anchor (click)=\"seleciona(restaurante)\"><ion-icon src=\"assets/images/arrow-back.svg\"></ion-icon></ion-anchor>\n\t\t<ion-anchor (click)=\"goToCart(restaurante)\"><ion-icon src=\"assets/images/ic_cart.svg\"></ion-icon></ion-anchor>\n\t</div>\n\t<img src=\"{{restaurante.imgtopo}}\" class=\"bg-image\">\n\t<div class=\"content\">\n\t\t<div class=\"page-header\">Finalizar Pedido</div>\n\n\t\t<div *ngIf=\"cart.pedidos === null\">\n\t\t\t\t<ion-list lines=\"none\" class=\"item-list\">\n\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\tSeu carrinho está vazio\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t<ion-list class=\"list-toppings\" lines=\"none\">\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Consumir no Local</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\" class=\"total\">Valor Total</ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\"></ion-radio>\n\t\t\t\t\t\t\t<ion-label>Pedido para Viagem</ion-label>\n\t\t\t\t\t\t\t<ion-note slot=\"end\" class=\"price\">R$ - </ion-note>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"cart.pedidos !== null\">\n\t\t\t\t<ion-list class=\"list-itens\" lines=\"none\">\n\t\t\t\t\t<ion-item no-padding *ngFor=\"let pedido of cart.pedidos; let i = index; \">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"pedido.cardapio != null\">\n\t\t\t\t\t\t\t<ion-label>{{pedido.quantidade}}x {{pedido.cardapio.nome}}</ion-label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"pedido.cardapio == null\">\n\t\t\t\t\t\t\t<ion-label>{{pedido.quantidade}}x {{pedido.cardapioGeral.nome}}</ion-label>\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-note slot=\"end\" *ngIf=\"pedido.cardapio != null\">R${{(pedido.quantidade*pedido.cardapio.preco) + (pedido.quantidade*pedido.acrescimoTotal)}}</ion-note>\n\t\t\t\t\t\t<ion-note slot=\"end\" *ngIf=\"pedido.cardapio == null\">R${{(pedido.quantidade*pedido.cardapioGeral.preco) + (pedido.quantidade*pedido.acrescimoTotal)}}</ion-note>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div>\n\t\t\t\t\t<p class=\"item-sub-title\"><b>Você aceita pagar os 10%?</b></p>\n\t\t\t\t\t<ion-list class=\"list-toppings\" lines=\"none\" >\n\t\t\t\t\t\t\t<ion-radio-group name=\"consumo\" ngDefaultControl [(ngModel)]=\"dezPorCento\">\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" name=\"dez\" value=\"Sim\" checked></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Sim</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note slot=\"end\" class=\"total\">Valor Total</ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" name=\"dez\" value=\"Não\"></ion-radio>\n\t\t\t\t\t\t\t\t\t<ion-label>Não</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-note *ngIf=\"dezPorCento == 'Sim'\" slot=\"end\" class=\"price\">R${{cart.valor_total + cart.valor_total*0.1}}</ion-note>\n\t\t\t\t\t\t\t\t\t<ion-note *ngIf=\"dezPorCento != 'Sim'\" slot=\"end\" class=\"price\">R${{cart.valor_total}}</ion-note>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p class=\"item-sub-title\"><b>Você possui algum cupom de desconto?</b></p>\n\t\t\t\t\t<ion-list class=\"list-toppings\" lines=\"none\" >\n\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t<ion-input placeholder=\"Cupom de Desconto\" [(ngModel)]=\"cupomDesc\" name=\"card_number\"></ion-input> <!---->\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t<div *ngIf=\"cart.pedidos != null\">\n\t\t\t\t\t<p class=\"item-sub-title\"><b>Como será o consumo?</b></p>\n\t\t\t\t\t<ion-list class=\"list-toppings\" lines=\"none\" >\n\t\t\t\t\t\t<ion-radio-group name=\"consumo\" ngDefaultControl [(ngModel)]=\"retiradaData\">\n\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" name=\"consumo\" value=\"Consumir no Local\" checked></ion-radio>\n\t\t\t\t\t\t\t\t<ion-label>Consumir no Local</ion-label>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item no-padding>\n\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"success\" name=\"consumo\" value=\"Pedido para Viagem\"></ion-radio>\n\t\t\t\t\t\t\t\t<ion-label>Pedido para Viagem</ion-label>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\n\t\t<p class=\"item-sub-title\"><b>Qual o horário da sua chegada?</b></p>\n\t\t<div class=\"input-time\">\n\t\t\t<ion-datetime\n\t\t\t\tdisplay-format=\"DD/MMM HH:mm\"\n\t\t\t\tpicker-format=\"DD/MMM HH:mm\"\n\t\t\t\tmonth-short-names=\"JAN, FEV, MAR, ABR, MAI, JUN, JUL, AGO, SET, OUT, NOV, DEZ\"\n\t\t\t\tplaceholder=\"Data/hora para Retirada\"\n\t\t\t\tminuteValues=\"0,10,20,30,40,50\"\n\t\t\t\tmax=\"20:30\"\n\t\t\t\tcancel-text=\"Cancelar\"\n\t\t\t\tdone-text=\"OK\"\n\t\t\t\t[(ngModel)]=\"isoDate\"\n\t\t\t></ion-datetime>\n\t\t</div>\n\t\t<div class=\"footer-buttons\">\n\t\t\t<ion-button (click)=\"seleciona(restaurante)\" color=\"medium\">Continuar Pedindo</ion-button>\n\t\t\t<ion-button (click)=\"verificaFinal()\" color=\"primary\">Finalizar Pedido</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/restaurant/order-end/order-end.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/restaurant/order-end/order-end.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-itens {\n  padding: 0px;\n  margin-bottom: 2rem; }\n  .list-itens ion-item {\n    --inner-padding-end: 0px;\n    --color: var(--ion-color-dark);\n    --min-height: unset;\n    height: 30px; }\n  .list-itens ion-item ion-note {\n      font-size: 15px;\n      padding: 0.8rem 0px 0px 0px; }\n  .list-toppings {\n  padding: 0px;\n  padding-bottom: 0.5rem; }\n  .list-toppings ion-item {\n    --inner-padding-end: 0px;\n    --color: var(--ion-color-medium);\n    --min-height: unset;\n    height: 30px; }\n  .list-toppings ion-item ion-radio {\n      --border-color: var(--ion-color-medium);\n      --border-width: 1.5px;\n      margin: 0px 0.6rem 0px 0px; }\n  .list-toppings ion-item ion-note {\n      font-size: 15px;\n      padding: 0.8rem 0px 0px 0px; }\n  .list-toppings ion-item ion-note.total {\n        color: var(--ion-color-dark);\n        --font-size: 14px !important; }\n  .list-toppings ion-item ion-note.price {\n        color: var(--ion-color-primary);\n        --font-size: 18px !important;\n        font-weight: bold; }\n  .delivery-time {\n  display: flex;\n  justify-content: start;\n  color: var(--ion-color-dark);\n  margin-top: 1.5rem;\n  font-size: 14px; }\n  .delivery-time ion-icon {\n    font-size: 35px;\n    margin-right: 1rem; }\n  .input-time {\n  width: 60%;\n  text-align: center;\n  margin: 1rem auto 0px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9vcmRlci1lbmQvQzpcXERlc2Vudm9sdmltZW50b1xcaW9uaWNcXEZyb250RW5kLVZpdGVWMi9zcmNcXGFwcFxccmVzdGF1cmFudFxcb3JkZXItZW5kXFxvcmRlci1lbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNaLG9CQUFtQixFQVduQjtFQWJEO0lBSUUseUJBQW9CO0lBQ3BCLCtCQUFRO0lBQ1Isb0JBQWE7SUFDYixhQUFZLEVBS1o7RUFaRjtNQVNHLGdCQUFlO01BQ1osNEJBQTJCLEVBQzlCO0VBSUg7RUFDQyxhQUFZO0VBQ1osdUJBQXNCLEVBeUJ0QjtFQTNCRDtJQUlFLHlCQUFvQjtJQUNwQixpQ0FBUTtJQUNSLG9CQUFhO0lBQ2IsYUFBWSxFQW1CWjtFQTFCRjtNQVNHLHdDQUFlO01BQ2Ysc0JBQWU7TUFDZiwyQkFBMEIsRUFDMUI7RUFaSDtNQWNHLGdCQUFlO01BQ2YsNEJBQTJCLEVBVTNCO0VBekJIO1FBaUJJLDZCQUE0QjtRQUM1Qiw2QkFBWSxFQUNaO0VBbkJKO1FBcUJJLGdDQUErQjtRQUMvQiw2QkFBWTtRQUNaLGtCQUFpQixFQUNqQjtFQUtKO0VBQ0MsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBS2Y7RUFWRDtJQU9FLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ2xCO0VBR0Y7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLDJCQUEwQixFQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvb3JkZXItZW5kL29yZGVyLWVuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pdGVucyB7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDJyZW07XHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdGlvbi1ub3RlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0ICAgIHBhZGRpbmc6IDAuOHJlbSAwcHggMHB4IDBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5saXN0LXRvcHBpbmdzIHtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuXHRpb24taXRlbSB7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRpb24tcmFkaW8ge1xyXG5cdFx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuXHRcdFx0bWFyZ2luOiAwcHggMC42cmVtIDBweCAwcHg7XHJcblx0XHR9XHJcblx0XHRpb24tbm90ZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0cGFkZGluZzogMC44cmVtIDBweCAwcHggMHB4O1xyXG5cdFx0XHQmLnRvdGFsIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdFx0XHRcdC0tZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5wcmljZSB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHQtLWZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZGVsaXZlcnktdGltZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcblx0bWFyZ2luLXRvcDogMS41cmVtO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRpb24taWNvbiB7XHJcblx0XHRmb250LXNpemU6IDM1cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblx0fVxyXG59XHJcblxyXG4uaW5wdXQtdGltZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMHB4IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/restaurant/order-end/order-end.page.ts":
/*!********************************************************!*\
  !*** ./src/app/restaurant/order-end/order-end.page.ts ***!
  \********************************************************/
/*! exports provided: OrderEndPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEndPage", function() { return OrderEndPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../domain/restaurante/restaurante */ "./src/domain/restaurante/restaurante.ts");
/* harmony import */ var _domain_cart_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../domain/cart/cart */ "./src/domain/cart/cart.ts");
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







var OrderEndPage = /** @class */ (function () {
    //public hora16: any = new Date("1970-01-01T16:00:00.000Z");
    function OrderEndPage(route, router, navCtrl, http, _alertCtrl) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.verifica = false;
        this.tempoMax = 0;
        this.hora7 = new Date("1970-01-01T07:00:00.000Z").toISOString();
        this.hora203 = new Date("1970-01-01T20:30:00.000Z").toISOString();
        this.hora103 = new Date("1970-01-01T10:30:00.000Z").toISOString();
        this.route.queryParams.subscribe(function (params) {
            _this.restaurante = new _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_5__["Restaurante"](null, null, null, null, null, null, null);
            _this.restaurante.id = params["id"];
            _this.restaurante.nome = params["nome"];
            _this.restaurante.telefone = params["telefone"];
            _this.restaurante.imgurl = params["imgurl"];
            _this.restaurante.imgtopo = params["imgtopo"];
            _this.restaurante.endereco = params["endereco"];
        });
        this.cart = new _domain_cart_cart__WEBPACK_IMPORTED_MODULE_6__["Cart"](null, null, null, null, null, null, null, null, null, null, null);
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.url = "https://viniciusvillar.000webhostapp.com/vite/page/cadastrar_pedido_ionic_cart";
        this.retiradaData = "Consumir no Local";
        this.dezPorCento = "Sim";
        this.cupomDesc = "";
        var date = new Date(); // Or the date you'd like converted.
        this.isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
        this.isoDateMin = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
        this.isoCurrentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    }
    OrderEndPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var link;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (sessionStorage.getItem('flagLogado') != "sim") {
                            this.goToLogin();
                        }
                        link = 'https://viniciusvillar.000webhostapp.com/vite/page/get_cupom/' + sessionStorage.getItem('usuarioId');
                        return [4 /*yield*/, this.http
                                .get(link)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                                .toPromise()
                                .then(function (cupons) {
                                for (var x = 0; x < cupons.length; x++) {
                                    _this.cupom1 = cupons[x].cupom1;
                                    _this.cupom2 = cupons[x].cupom2;
                                }
                            })
                                .catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        console.log(sessionStorage.getItem('usuarioId'));
                        console.log(sessionStorage.getItem('usuarioName'));
                        console.log(sessionStorage.getItem('usuarioLogado'));
                        if (sessionStorage.getItem('cart')) {
                            //console.log(sessionStorage.getItem('cart'))
                            this.cart = JSON.parse(sessionStorage.getItem('cart'));
                            this.cart.retirada = this.retiradaData;
                            this.cart.horario = this.isoDate;
                        }
                        else {
                            console.log("Carrinho vazio");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderEndPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    OrderEndPage.prototype.seleciona = function (restaurante) {
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
    OrderEndPage.prototype.goToCart = function (restaurante) {
        console.log("\n this.retiradaData: " + this.retiradaData + "\n this.isoData: " + this.isoDate);
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
    OrderEndPage.prototype.goToPayment = function (restaurante) {
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
        this.router.navigate(['/cards-list'], navigationExtras);
        //this.navCtrl.('/restaurant', { restauranteSelecionado: restaurante });
    };
    OrderEndPage.prototype.verificaFinal = function () {
        console.log("this.cupomDesc " + this.cupomDesc + "\n");
        this.cart.horario = this.isoDate;
        if (this.dezPorCento == "Sim") {
            this.cart.dezPorCento = parseFloat((this.cart.valor_total * 0.10).toFixed(2));
        }
        else {
            this.cart.dezPorCento = 0;
        }
        if (this.cupomDesc != "") {
            if (this.cupomDesc == "VITEAPP10") {
                if (this.cupom1 == null) {
                    this.cart.cupomDesc = parseFloat((this.cart.valor_total * 0.10).toFixed(2));
                    sessionStorage.setItem("cart", JSON.stringify(this.cart));
                    this.desconto10();
                    this.checkout();
                }
                else {
                    this.cupomUtilizado();
                }
            }
            else if (this.cupomDesc == "OBRIGADA20") {
                if (this.cupom2 == null) {
                    this.cart.cupomDesc = parseFloat((this.cart.valor_total * 0.20).toFixed(2));
                    sessionStorage.setItem("cart", JSON.stringify(this.cart));
                    this.desconto20();
                    this.checkout();
                }
                else {
                    this.cupomUtilizado();
                }
            }
            else {
                this.cupomInexistente();
            }
        }
        else {
            this.cart.cupomDesc = 0;
            sessionStorage.setItem("cart", JSON.stringify(this.cart));
            this.checkout();
        }
    };
    OrderEndPage.prototype.checkout = function () {
        var _this = this;
        if (this.isoDate < this.isoDateMin.toISOString()) {
            console.log("Entrou aqui pq a hora é anterior a atual \n\n\n");
            this.presentFailAlert();
        }
        else {
            var aux7 = this.hora7.substring(12, 13);
            var aux203 = this.hora203.substring(11, 13);
            var auxDate = this.isoDate.substring(11, 13);
            var auxDateMin = this.isoDate.substring(14, 16);
            var aux203Min = this.hora203.substring(14, 16);
            if (+auxDate < +aux7) {
                console.log("Entrou aqui pq a hora é anterior as 7. \n\n\n");
                this.presentFailAlert2();
            }
            else {
                if (+auxDate > +aux203) {
                    console.log("Entrou aqui pq a hora é posterior as 20:30. \n\n\n");
                    this.presentFailAlert3();
                }
                else {
                    if (+auxDate == +aux203) {
                        if (+auxDateMin > +aux203Min) {
                            console.log("Entrou aqui pq a hora é posterior as 20:30. \n\n\n");
                            this.presentFailAlert3();
                        }
                    }
                    else {
                        for (var i = 0; i < this.cart.pedidos.length; i++) {
                            if (this.cart.pedidos[i].cardapioGeral != null) {
                                var pedidoTempo = this.cart.pedidos[i].cardapioGeral.tempo;
                                if (+pedidoTempo > +this.tempoMax) {
                                    this.tempoMax = +pedidoTempo;
                                }
                                if (this.cart.pedidos[i].cardapioGeral.tempo_max == "10:30") {
                                    var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(0, 2);
                                    var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(3, 5);
                                    if (+auxDate > +pedidoDate) {
                                        console.log("Entrou aqui pq a hora é posterior as 10:30. \n\n\n");
                                        this.verifica = true;
                                    }
                                    if (+auxDate == +pedidoDate) {
                                        if (+auxDateMin > +pedidoDateMin) {
                                            console.log("############# aqui ########");
                                            this.verifica = true;
                                        }
                                    }
                                }
                                if (this.cart.pedidos[i].cardapioGeral.tempo_max == "15:00") {
                                    var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(0, 2);
                                    var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_max.substring(3, 5);
                                    if (+auxDate > +pedidoDate) {
                                        console.log("Entrou aqui pq a hora é posterior as 15:00. \n\n\n");
                                    }
                                    if (+auxDate == +pedidoDate) {
                                        if (+auxDateMin > +pedidoDateMin) {
                                            console.log("############# aqui ########");
                                            this.verifica = true;
                                        }
                                    }
                                }
                                if (this.cart.pedidos[i].cardapioGeral.tempo_min == "16:00") {
                                    var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(0, 2);
                                    var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(3, 5);
                                    if (+auxDate < +pedidoDate) {
                                        console.log("Entrou aqui pq a hora é inferior as 16:00. \n\n\n");
                                        this.verifica = true;
                                    }
                                }
                                if (this.cart.pedidos[i].cardapioGeral.tempo_min == "12:00") {
                                    var pedidoDate = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(0, 2);
                                    var pedidoDateMin = this.cart.pedidos[i].cardapioGeral.tempo_min.substring(3, 5);
                                    if (+auxDate < +pedidoDate) {
                                        console.log("Entrou aqui pq a hora é inferior as 12:00. \n\n\n");
                                        this.verifica = true;
                                    }
                                }
                            }
                        }
                        this.isoCurrentDate.setMinutes(this.isoCurrentDate.getMinutes() + this.tempoMax);
                        var day = new Date(this.isoDate);
                        if (day.getDay() == 6 || day.getDay() == 0) {
                            console.log("Final de semana. \n\n\n");
                            this.verifica = false;
                            this.presentFailAlert4();
                        }
                        else {
                            if (this.isoCurrentDate.toISOString() > this.isoDate) {
                                console.log("entra aqui pq com o pedido, o tempo fica inferior a chegada\n");
                                if (this.verifica != true) {
                                    this.cart.retirada = this.retiradaData;
                                    var data = JSON.stringify(this.cart);
                                    console.log(data);
                                    this.http.post(this.url, data)
                                        .subscribe(function (data) {
                                        _this.data.response = data._body;
                                        _this.presentFailAlert5();
                                        ;
                                    }, function (error) {
                                        console.log("Oooops!");
                                        _this.presentFailAlert6();
                                    });
                                    this.verifica = false;
                                    //this.navCtrl.push(PagamentoPage, { restauranteSelecionado: this.restaurante });
                                    this.goToPayment(this.restaurante);
                                }
                                else {
                                    console.log("Horário cardápio inválido. \n\n\n");
                                    this.verifica = false;
                                    this.presentFailAlert7();
                                }
                            }
                            else {
                                if (this.verifica != true) {
                                    this.cart.retirada = this.retiradaData;
                                    var data = JSON.stringify(this.cart);
                                    console.log(data);
                                    this.http.post(this.url, data)
                                        .subscribe(function (data) {
                                        _this.data.response = data._body;
                                    }, function (error) {
                                        console.log("Oooops!");
                                        _this.presentFailAlert6();
                                    });
                                    this.verifica = false;
                                    this.goToPayment(this.restaurante);
                                    //this.navCtrl.push(PagamentoPage, { restauranteSelecionado: this.restaurante });
                                }
                                else {
                                    console.log("Horário cardápio inválido. \n\n\n");
                                    this.verifica = false;
                                    this.presentFailAlert7();
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    OrderEndPage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Horário inferior ao atual.",
                            message: 'Por favor, atualize o horário de chegada.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.cupomUtilizado = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Esse cupom já foi utilizado por essa conta.",
                            message: 'Por favor, tente outro cupom.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.cupomInexistente = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Esse cupom não existe.",
                            message: 'Por favor, tente outro cupom.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.desconto10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Parabéns",
                            message: 'Você ganhou 10% de desconto.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.desconto20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Parabéns",
                            message: 'Você ganhou 20% de desconto.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.presentFailAlert2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "O estabelecimento só abre após às 7:00.",
                            message: 'Por favor, atualize o horário de chegada.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.presentFailAlert3 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "A VITE só aceita pedidos até às 20:30.\n",
                            message: 'Por favor, atualize o horário de chegada.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.presentFailAlert4 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Infelizmente, a VITE ainda não está operando aos finais de semana.",
                            message: 'Pedidos somente nos estabelecimentos.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.presentFailAlert5 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "O tempo de preparo do seu pedido é maior do que o horário da sua chegada",
                            message: 'Seu pedido ficará pronto às ' + this.isoCurrentDate.toISOString().substring(11, 13) + ':' + this.isoCurrentDate.toISOString().substring(14, 16),
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.presentFailAlert6 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Falha na conexão!",
                            message: 'Não foi possível salvar o pedido. Tente novamente.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage.prototype.presentFailAlert7 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Algum pedido não respeita o horário do cardápio.\n",
                            message: 'Por favor, remova-o ou atualize a hora que chegará ao estabelecimento.',
                            buttons: [{ text: 'Ok!' }]
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
    OrderEndPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-end',
            template: __webpack_require__(/*! ./order-end.page.html */ "./src/app/restaurant/order-end/order-end.page.html"),
            styles: [__webpack_require__(/*! ./order-end.page.scss */ "./src/app/restaurant/order-end/order-end.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], OrderEndPage);
    return OrderEndPage;
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
//# sourceMappingURL=restaurant-order-end-order-end-module.js.map