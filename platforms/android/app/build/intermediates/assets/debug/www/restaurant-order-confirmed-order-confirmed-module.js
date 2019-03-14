(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-order-confirmed-order-confirmed-module"],{

/***/ "./src/app/restaurant/order-confirmed/order-confirmed.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant/order-confirmed/order-confirmed.module.ts ***!
  \**********************************************************************/
/*! exports provided: OrderConfirmedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmedPageModule", function() { return OrderConfirmedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _order_confirmed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-confirmed.page */ "./src/app/restaurant/order-confirmed/order-confirmed.page.ts");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _order_confirmed_page__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmedPage"]
    }
];
var OrderConfirmedPageModule = /** @class */ (function () {
    function OrderConfirmedPageModule() {
    }
    OrderConfirmedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ng_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieAnimationViewModule"]
            ],
            declarations: [_order_confirmed_page__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmedPage"]]
        })
    ], OrderConfirmedPageModule);
    return OrderConfirmedPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/order-confirmed/order-confirmed.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant/order-confirmed/order-confirmed.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\t<div class=\"header-buttons\">\n\t\t<ion-anchor (click)=\"seleciona(restaurante)\"><ion-icon src=\"assets/images/arrow-back.svg\"></ion-icon></ion-anchor>\n\t\t<a></a>\n\t</div>\n\t<img src=\"{{restaurante.imgtopo}}\" class=\"bg-image\">\n\t<div class=\"content\">\n\t\t<div class=\"page-header\">Seu pagamento foi aprovado!</div>\n\t\t\n\t\t<div class=\"anim\">\n\t\t\t<!--<p>A mesa 2 está reservada para você.</p>-->\n\t\t\t<lottie-animation-view\n\t\t\t\t[options]=\"{path: 'assets/anim/confirm-new-order.json', autoplay: false, loop: false}\"\n\t\t\t\t[width]=\"120\"\n\t\t\t\t[height]=\"120\"\n\t\t\t\t(animCreated)=\"handleAnimation($event)\">\n\t\t\t</lottie-animation-view>\n\t\t\t<p>Começaremos a preparar seu pedido para que ele esteja pronto no horário determinado.</p>\n\t\t</div>\n\n\t\t<div class=\"footer-buttons\">\n\t\t\t<ion-button (click)=\"close()\" color=\"primary\">Entendido!</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/restaurant/order-confirmed/order-confirmed.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant/order-confirmed/order-confirmed.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  text-align: center; }\n\n.anim {\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  height: 24vh;\n  flex-direction: column;\n  text-align: center; }\n\n.anim p {\n    color: var(--ion-color-medium-shade);\n    font-size: 14px;\n    margin: 0px; }\n\n.anim ion-icon {\n    color: var(--ion-color-primary);\n    font-size: 60px;\n    margin: 0.5rem 0px; }\n\nlottie-animation-view {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9vcmRlci1jb25maXJtZWQvQzpcXERlc2Vudm9sdmltZW50b1xcaW9uaWNcXEZyb250RW5kLVZpdGVWMi9zcmNcXGFwcFxccmVzdGF1cmFudFxcb3JkZXItY29uZmlybWVkXFxvcmRlci1jb25maXJtZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsYUFBWTtFQUNmLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFXbEI7O0FBakJEO0lBUUUscUNBQW9DO0lBQ3BDLGdCQUFlO0lBQ2YsWUFBVyxFQUNYOztBQVhGO0lBYUUsZ0NBQStCO0lBQy9CLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ2xCOztBQUVGO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvb3JkZXItY29uZmlybWVkL29yZGVyLWNvbmZpcm1lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYW5pbSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjR2aDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwIHtcclxuXHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdH1cclxuXHRpb24taWNvbiB7XHJcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0Zm9udC1zaXplOiA2MHB4O1xyXG5cdFx0bWFyZ2luOiAwLjVyZW0gMHB4O1xyXG5cdH1cclxufVxyXG5sb3R0aWUtYW5pbWF0aW9uLXZpZXcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/restaurant/order-confirmed/order-confirmed.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant/order-confirmed/order-confirmed.page.ts ***!
  \********************************************************************/
/*! exports provided: OrderConfirmedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmedPage", function() { return OrderConfirmedPage; });
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




var OrderConfirmedPage = /** @class */ (function () {
    function OrderConfirmedPage(route, router, navCtrl) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
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
    OrderConfirmedPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('flagLogado') != "sim") {
            this.goToLogin();
        }
    };
    OrderConfirmedPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    OrderConfirmedPage.prototype.seleciona = function (restaurante) {
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
    OrderConfirmedPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.anim.play();
        }, 250);
    };
    OrderConfirmedPage.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    OrderConfirmedPage.prototype.close = function () {
        if (sessionStorage.getItem('cart')) {
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
            sessionStorage.removeItem('cart');
        }
        this.navCtrl.navigateRoot('/tabs/(home:home)');
    };
    OrderConfirmedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-confirmed',
            template: __webpack_require__(/*! ./order-confirmed.page.html */ "./src/app/restaurant/order-confirmed/order-confirmed.page.html"),
            styles: [__webpack_require__(/*! ./order-confirmed.page.scss */ "./src/app/restaurant/order-confirmed/order-confirmed.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], OrderConfirmedPage);
    return OrderConfirmedPage;
}());



/***/ })

}]);
//# sourceMappingURL=restaurant-order-confirmed-order-confirmed-module.js.map