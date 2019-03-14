(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-about-about-module"],{

/***/ "./src/app/restaurant/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/app/restaurant/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/restaurant/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/about/about.page.html":
/*!**************************************************!*\
  !*** ./src/app/restaurant/about/about.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\t<div class=\"header-buttons\">\n\t\t<ion-anchor (click)=\"seleciona(restaurante)\"><ion-icon src=\"assets/images/x-icon.svg\"></ion-icon></ion-anchor>\n\t\t<ion-anchor (click)=\"goToCart(restaurante)\"><ion-icon src=\"assets/images/ic_cart.svg\"></ion-icon></ion-anchor>\n\t</div>\n\t<img src=\"{{restaurante.imgtopo}}\" class=\"bg-image\">\n\t<div class=\"content\">\n\t\t<div class=\"item-title\">\n\t\t\t<div class=\"page-header\">{{restaurante.nome}}</div>\n\t\t\t<ion-anchor (click)=\"seleciona(restaurante)\" class=\"item-button\">\n\t\t\t\t<ion-icon name=\"f-x-circle\"></ion-icon>\n\t\t\t</ion-anchor>\n\t\t</div>\n\t\t<div class=\"page-sub-header\">{{restaurante.endereco}}</div>\n\t\t<h5>Sobre</h5>\n\t\t<div class=\"text\" *ngIf=\"restaurante.id == '1'\">\n\t\t\t<p>Com um ambiente arquitetônico moderno, o Octavio Café Faria Lima, a primeira unidade do Octavio Café e maior cafeteria de toda a América Latina, tornou-se um templo para os amantes de café especial contando com uma premiada equipe de baristas dedicados que são responsáveis por criar blends exclusivos e personalizados. </p>\n\t\t\t<p>Possui um cardápio amplo, que contempla opções de café da manhã, almoço, petiscos e janta.</p>\n\t\t\t<p>O Octávio Café é um lugar especial, muito mais que uma cafeteria, um ambiente que proporciona a possibilidade de se vivenciar uma experiência única, ideal desde reuniões de negócios até o happy hour.</p>\n\t\t</div>\n\n\t\t<div class=\"text\" *ngIf=\"restaurante.id == '2'\">\n\t\t\t<p>Com um ambiente arquitetônico moderno, o Octavio Café Cidade Jardim, mais nova unidade Octavio Café em São Paulo conta com um cardápio diversificado, com itens que vão desde seus cafés especiais e métodos de preparo até pratos, sanduíches e doces.</p>\n\t\t</div>\n\n\t\t<div class=\"text\" *ngIf=\"restaurante.id == '3'\">\n\t\t\t<p>Com um ambiente arquitetônico moderno e relaxante, o Octavio Café Eldorado conta com um cardápio diversificado, com itens que vão desde seus cafés especiais e métodos de preparo até pratos, sanduíches e doces.</p>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/restaurant/about/about.page.scss":
/*!**************************************************!*\
  !*** ./src/app/restaurant/about/about.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .item-title .item-button {\n    color: var(--ion-color-medium);\n    font-size: 25px; }\n  .text {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  padding-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9hYm91dC9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFxyZXN0YXVyYW50XFxhYm91dFxcYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEIsRUFLOUI7RUFSRDtJQUtFLCtCQUE4QjtJQUM5QixnQkFBZSxFQUNmO0VBRUY7RUFDQyxxQ0FBb0M7RUFDcEMsZ0JBQWU7RUFDZixxQkFBb0IsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50L2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdC5pdGVtLWJ1dHRvbiB7XHJcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0fVxyXG59XHJcbi50ZXh0IHtcclxuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/restaurant/about/about.page.ts":
/*!************************************************!*\
  !*** ./src/app/restaurant/about/about.page.ts ***!
  \************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/restaurante/restaurante */ "./src/domain/restaurante/restaurante.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(route, navCtrl, router) {
        var _this = this;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.restaurante = new _domain_restaurante_restaurante__WEBPACK_IMPORTED_MODULE_3__["Restaurante"](null, null, null, null, null, null, null);
            _this.restaurante.id = params["id"];
            _this.restaurante.nome = params["nome"];
            _this.restaurante.telefone = params["telefone"];
            _this.restaurante.imgurl = params["imgurl"];
            _this.restaurante.imgtopo = params["imgtopo"];
            _this.restaurante.endereco = params["endereco"];
        });
    }
    AboutPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('flagLogado') != "sim") {
            this.goToLogin();
        }
    };
    AboutPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    AboutPage.prototype.goToCart = function (restaurante) {
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
    AboutPage.prototype.seleciona = function (restaurante) {
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
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/restaurant/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/restaurant/about/about.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AboutPage);
    return AboutPage;
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
//# sourceMappingURL=restaurant-about-about-module.js.map