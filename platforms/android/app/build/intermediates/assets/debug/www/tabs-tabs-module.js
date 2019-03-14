(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"] }])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class=\"page-header\">Resturantes</div>\n\t<ion-list class=\"list-restaurants\" lines=\"none\">\n\t\t<ion-anchor no-padding *ngFor=\"let restaurante of restaurantes\" >\n\t\t\t<div class=\"restaurant\" *ngIf=\"restaurante.ativo != 0\" (click)=\"seleciona(restaurante)\">\n\t\t\t\t<img src=\"{{ restaurante.imgurl }}\" class=\"image\">\n\t\t\t\t<div class=\"restaurant-content\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"name\">{{restaurante.nome}}</div>\n\t\t\t\t\t\t<div class=\"address\">{{restaurante.endereco}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"price\">$$$</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-anchor>\n\t\t<ion-anchor no-padding *ngFor=\"let restaurante of restaurantes\" >\n\t\t\t<div class=\"restaurant\" *ngIf=\"restaurante.ativo == 0\" (click)=\"presentAlert()\">\n\t\t\t\t<img src=\"{{ restaurante.imgurl }}\" class=\"image-bw\">\n\t\t\t\t<div class=\"restaurant-content\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"name-bw\">{{restaurante.nome}}</div>\n\t\t\t\t\t\t<div class=\"address\">{{restaurante.endereco}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"price\">$$$</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-anchor>\n\t</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _http, _loadingCtrl, _alertCtrl, router) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.router = router;
    }
    HomePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sessionStorage.getItem('flagLogado') != "sim")) return [3 /*break*/, 1];
                        this.goToLogin();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this._http
                            .get('https://viniciusvillar.000webhostapp.com/vite/page/get_ionic')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                            .toPromise()
                            .then(function (restaurantes) {
                            _this.restaurantes = restaurantes;
                        })
                            .catch(function (err) {
                            console.log(err);
                            _this.presentFailAlert();
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openRestaurant = function (r) {
        this.router.navigate['/restaurant'];
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    HomePage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Falha na conexão",
                            message: 'Não foi possível obter a lista de restaurantes. Tente novamente.',
                            buttons: [{ text: "Estou ciente!" }]
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
    HomePage.prototype.seleciona = function (restaurante) {
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
    HomePage.prototype.goToLocalEscolhido = function (params) {
        if (!params)
            params = {};
        this.router.navigate['/restaurant'];
    };
    HomePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Ops",
                            message: 'No momento, esse restaurante não está funcionando para pedidos via aplicativo.',
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
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.html":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class=\"profile\">\n\t\t<img [src]=\"'assets/images/user2.png'\" class=\"avatar\">\n\t\t<div class=\"name\">{{nameUser}}</div>\n\t</div>\n\t<ion-list lines=\"none\">\n\t\t<ion-item button href=\"/history\" no-padding>\n\t\t\t<ion-label>Histórico de pedidos</ion-label>\n\t\t\t<ion-icon slot=\"start\" name=\"f-clock\"></ion-icon>\n\t\t</ion-item>\n\t\t<ion-item button href=\"/cards\" no-padding>\n\t\t\t<ion-label>Meus Cartões</ion-label>\n\t\t\t<ion-icon slot=\"start\" name=\"f-credit-card\"></ion-icon>\n\t\t</ion-item>\n\t\t<ion-item button (click)=\"presentFailAlert()\" no-padding> <!--href=\"/config\"-->\n\t\t\t<ion-label>Configurações</ion-label>\n\t\t\t<ion-icon slot=\"start\" name=\"f-settings\"></ion-icon>\n\t\t</ion-item>\n\t\t<ion-item button href=\"/login\" no-padding>\n\t\t\t<ion-label>Sair</ion-label>\n\t\t\t<ion-icon slot=\"start\" name=\"f-log-out\"></ion-icon>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 30px; }\n\n.profile {\n  align-items: center;\n  display: flex;\n  margin-bottom: 1rem; }\n\n.profile .avatar {\n    width: 80px;\n    height: 80px;\n    border-radius: 100%;\n    margin-right: 1.5rem; }\n\n.profile .name {\n    color: var(--ion-color-primary);\n    font-size: 18px;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFjLEVBQ2Q7O0FBQ0Q7RUFDQyxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLG9CQUFtQixFQVluQjs7QUFmRDtJQUtFLFlBQVc7SUFDWCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLHFCQUFvQixFQUNwQjs7QUFURjtJQVdFLGdDQUErQjtJQUMvQixnQkFBZTtJQUNmLGtCQUFpQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1wYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4ucHJvZmlsZSB7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi1ib3R0b206IDFyZW07XHJcblx0LmF2YXRhciB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuXHR9XHJcblx0Lm5hbWUge1xyXG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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


var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, _alertCtrl) {
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.nameUser = sessionStorage.getItem('usuarioName');
        this.emailUser = sessionStorage.getItem('usuarioLogado');
        this.idUser = sessionStorage.getItem('usuarioId');
    }
    MenuPage.prototype.ngOnInit = function () { };
    MenuPage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Ops",
                            message: '<p>Estamos trabalhando nesse exato momento para deixar a Vite mais completa para você!</p> <p>Agradecemos a compreensão.</p>',
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
    MenuPage.prototype.logout = function () {
        sessionStorage.removeItem('usuarioId');
        sessionStorage.removeItem('usuarioName');
        sessionStorage.removeItem('usuarioLogado');
        sessionStorage.removeItem('flagLogado');
        sessionStorage.removeItem('cart');
        this.navCtrl.navigateRoot('/login');
    };
    MenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SearchPageModule } from '../search/search.module';
//import { CartPageModule } from '../cart/cart.module';

var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomePageModule"],
                //SearchPageModule,
                //CartPageModule,
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__["MenuPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\t<ion-tab tab=\"home\">\n\t\t<ion-router-outlet name=\"home\"></ion-router-outlet>\n\t</ion-tab>\n\t<!--<ion-tab tab=\"search\">\n\t\t<ion-router-outlet name=\"search\"></ion-router-outlet>\n\t</ion-tab>-->\n\t<!--<ion-tab tab=\"cart\">\n\t\t<ion-router-outlet name=\"cart\"></ion-router-outlet>\n\t</ion-tab>-->\n\t<ion-tab tab=\"menu\">\n\t\t<ion-router-outlet name=\"menu\"></ion-router-outlet>\n\t</ion-tab>\n\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"home\" href=\"/tabs/(home:home)\">\n\t\t\t<ion-icon name=\"f-home\"></ion-icon>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"search\" (click)=\"presentFailAlert()\"> <!--<ion-tab-button tab=\"search\" href=\"/tabs/(search:search)\">-->\n\t\t\t<ion-icon name=\"f-search\"></ion-icon>\n\t\t</ion-tab-button>\n\t\t<!--<ion-tab-button tab=\"cart\" href=\"/tabs/(cart:cart)\">\n\t\t\t<ion-icon name=\"f-shopping-cart\"></ion-icon>\n\t\t</ion-tab-button>-->\n\t\t<ion-tab-button tab=\"menu\" href=\"/tabs/(menu:menu)\">\n\t\t\t<ion-icon name=\"f-menu\"></ion-icon>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  border-top: 0px;\n  box-shadow: 0 10px 20px 17px rgba(0, 0, 0, 0.03);\n  transition: height 0.3s linear, -webkit-transform 0.3s linear;\n  transition: transform 0.3s linear, height 0.3s linear;\n  transition: transform 0.3s linear, height 0.3s linear, -webkit-transform 0.3s linear; }\n  ion-tab-bar ion-tab-button {\n    background: #fff;\n    color: var(--ion-color-light-shade); }\n  ion-tab-bar ion-tab-button.tab-selected {\n      color: var(--ion-color-primary);\n      border-bottom: 2px solid; }\n  ion-tab-bar.hide {\n    -webkit-transform: translateY(56px);\n            transform: translateY(56px);\n    height: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFlO0VBQ2YsaURBQThDO0VBRzlDLDhEQUFxRDtFQUFyRCxzREFBcUQ7RUFBckQscUZBQXFELEVBYXJEO0VBbEJEO0lBT0UsaUJBQWdCO0lBQ2hCLG9DQUFtQyxFQUtuQztFQWJGO01BVUcsZ0NBQStCO01BQy9CLHlCQUF3QixFQUN4QjtFQVpIO0lBZUUsb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixZQUFXLEVBQ1giLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xuXHRib3JkZXItdG9wOiAwcHg7XG5cdGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDE3cHggcmdiYSgwLCAwLCAwLC4wMyk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgbGluZWFyLCBoZWlnaHQgMC4zcyBsaW5lYXI7IFxuXHQtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBsaW5lYXIsIGhlaWdodCAwLjNzIGxpbmVhcjsgXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGxpbmVhciwgaGVpZ2h0IDAuM3MgbGluZWFyO1xuXHRpb24tdGFiLWJ1dHRvbiB7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblx0XHQmLnRhYi1zZWxlY3RlZCB7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuXHRcdH1cblx0fVxuXHQmLmhpZGUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1NnB4KTtcblx0XHRoZWlnaHQ6IDBweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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


var TabsPage = /** @class */ (function () {
    function TabsPage(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    TabsPage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Ops",
                            message: 'Estamos trabalhando nesse exato momento para tornar essa busca possível!. Agradecemos a compreensão.',
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
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.page */ "./src/app/menu/menu.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { SearchPage } from '../search/search.page';
//import { CartPage } from '../cart/cart.page';

var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: '/tabs/(home:home)',
                pathMatch: 'full',
            }, {
                path: 'home',
                outlet: 'home',
                component: _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
            },
            {
                path: 'menu',
                outlet: 'menu',
                component: _menu_menu_page__WEBPACK_IMPORTED_MODULE_4__["MenuPage"]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map