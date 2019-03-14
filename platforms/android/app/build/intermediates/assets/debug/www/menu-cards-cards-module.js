(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-cards-cards-module"],{

/***/ "./src/app/menu/cards/cards.module.ts":
/*!********************************************!*\
  !*** ./src/app/menu/cards/cards.module.ts ***!
  \********************************************/
/*! exports provided: CardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards.page */ "./src/app/menu/cards/cards.page.ts");
/* harmony import */ var _edit_card_edit_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-card/edit-card.module */ "./src/app/menu/cards/edit-card/edit-card.module.ts");
/* harmony import */ var _edit_card_edit_card_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-card/edit-card.page */ "./src/app/menu/cards/edit-card/edit-card.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _cards_page__WEBPACK_IMPORTED_MODULE_5__["CardsPage"]
    }
];
var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _edit_card_edit_card_module__WEBPACK_IMPORTED_MODULE_6__["EditCardPageModule"]
            ],
            declarations: [_cards_page__WEBPACK_IMPORTED_MODULE_5__["CardsPage"]],
            entryComponents: [_edit_card_edit_card_page__WEBPACK_IMPORTED_MODULE_7__["EditCardPage"]]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());



/***/ }),

/***/ "./src/app/menu/cards/cards.page.html":
/*!********************************************!*\
  !*** ./src/app/menu/cards/cards.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n\t<ion-toolbar transparent>\r\n        <ion-title>Meus cartões</ion-title>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding >\r\n    <ion-list class=\"card-list\">\r\n        <ion-item no-padding *ngFor=\"let cPagamento of cPagamentos; let i=index;\">\r\n            <ion-label>\r\n                <span class=\"value\">Número do Cartão</span>\r\n                <span class=\"desc\">****.****.****.{{cPagamento.card_number.substring(cPagamento.card_number.length-4,cPagamento.card_number.length)}}</span>\r\n                <span class=\"value\">Tipo do Cartão</span>\r\n                <span *ngIf=\"cPagamento.payment_method_code == 'credit_card'\" class=\"desc\">Cartão de Crédito</span>\r\n                <span class=\"value\">Vencimento</span>\r\n                <span class=\"desc\">{{cPagamento.card_expiration}}</span>\r\n            </ion-label>\r\n            <ion-icon slot=\"start\" src=\"assets/images/{{cPagamento.payment_company_code}}.svg\"></ion-icon>\r\n            <!--<ion-button (click)=\"edit()\" fill=\"clear\"><ion-icon slot=\"end\" src=\"assets/feather/md-f-edit-2.svg\" color=\"dark\"></ion-icon></ion-button>-->\r\n            <ion-button (click)=\"remove(cPagamento.id, i)\" fill=\"clear\"><ion-icon slot=\"end\" src=\"assets/feather/md-f-trash-2.svg\" color=\"danger\"></ion-icon></ion-button>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"medium\" fill=\"clear\" (click)=\"edit()\">Cadastrar novo cartão</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/cards/cards.page.scss":
/*!********************************************!*\
  !*** ./src/app/menu/cards/cards.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-list ion-item {\n  color: var(--ion-color-dark); }\n  .card-list ion-item .value {\n    font-size: 16px;\n    display: block; }\n  .card-list ion-item .desc {\n    font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jYXJkcy9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFxtZW51XFxjYXJkc1xcY2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsNkJBQTRCLEVBUTVCO0VBVkY7SUFJRyxnQkFBZTtJQUNmLGVBQWMsRUFDZDtFQU5IO0lBUUcsZ0JBQWUsRUFDZiIsImZpbGUiOiJzcmMvYXBwL21lbnUvY2FyZHMvY2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbGlzdCB7XHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuXHRcdC52YWx1ZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblx0XHQuZGVzYyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/cards/cards.page.ts":
/*!******************************************!*\
  !*** ./src/app/menu/cards/cards.page.ts ***!
  \******************************************/
/*! exports provided: CardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPage", function() { return CardsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_card_edit_card_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-card/edit-card.page */ "./src/app/menu/cards/edit-card/edit-card.page.ts");
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






var CardsPage = /** @class */ (function () {
    function CardsPage(modalCtrl, navCtrl, _http, router) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this._http = _http;
        this.router = router;
    }
    CardsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var link;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (sessionStorage.getItem('flagLogado') != "sim") {
                            this.goToLogin();
                        }
                        link = 'https://viniciusvillar.000webhostapp.com/vite/page/get_card/' + sessionStorage.getItem('usuarioId');
                        return [4 /*yield*/, this._http
                                .get(link)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }))
                                .toPromise()
                                .then(function (cPagamentos) {
                                _this.cPagamentos = cPagamentos;
                            })
                                .catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CardsPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    CardsPage.prototype.goToCards = function () {
        this.router.navigate(['/cards']);
    };
    CardsPage.prototype.edit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _edit_card_edit_card_page__WEBPACK_IMPORTED_MODULE_5__["EditCardPage"],
                            componentProps: { card: {} },
                            showBackdrop: true,
                            backdropDismiss: true,
                            cssClass: 'custom-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            if (d.data == 200) {
                                _this.ngOnInit();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardsPage.prototype.remove = function (id, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http
                            .get('https://viniciusvillar.000webhostapp.com/vite/page/delete_card/' + id)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }))
                            .toPromise()
                            .then(function (response) {
                            console.log("Cartão excluído\n");
                        })
                            .catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        console.log("index: " + index + "\n");
                        this.cPagamentos.splice(index, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    CardsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.page.html */ "./src/app/menu/cards/cards.page.html"),
            styles: [__webpack_require__(/*! ./cards.page.scss */ "./src/app/menu/cards/cards.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CardsPage);
    return CardsPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-cards-cards-module.js.map