(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~menu-cards-cards-module~menu-cards-edit-card-edit-card-module"],{

/***/ "./src/app/menu/cards/edit-card/edit-card.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/menu/cards/edit-card/edit-card.module.ts ***!
  \**********************************************************/
/*! exports provided: EditCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCardPageModule", function() { return EditCardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_card_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-card.page */ "./src/app/menu/cards/edit-card/edit-card.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditCardPageModule = /** @class */ (function () {
    function EditCardPageModule() {
    }
    EditCardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_edit_card_page__WEBPACK_IMPORTED_MODULE_4__["EditCardPage"]]
        })
    ], EditCardPageModule);
    return EditCardPageModule;
}());



/***/ }),

/***/ "./src/app/menu/cards/edit-card/edit-card.page.html":
/*!**********************************************************!*\
  !*** ./src/app/menu/cards/edit-card/edit-card.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class=\"page-header\">Cadastrar novo cartão</div>\n\t<ion-list lines=\"none\">\n\t\t<ion-item no-padding>\n\t\t\t<ion-input placeholder=\"Número do Cartão\" [(ngModel)]=\"cPagamento.card_number\" name=\"card_number\" maxlength=\"16\" required></ion-input>\n\t\t</ion-item>\n\t\t<ion-item no-padding>\n\t\t\t<ion-input placeholder=\"Nome do Titular\" [(ngModel)]=\"cPagamento.holder_name\" name=\"holder_name\" required></ion-input>\n\t\t</ion-item>\n\t\t<!--<ion-item no-padding>\n\t\t\t<ion-input placeholder=\"CPF\"></ion-input>\n\t\t</ion-item>-->\n\t\t<ion-item no-padding>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t<ion-datetime placeholder=\"Vencimento\" displayFormat=\"MM/YY\" min=\"2018\" max=\"2035-12-31\"  [(ngModel)]=\"cPagamento.card_expiration\" name=\"card_expiration\" required></ion-datetime>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t<ion-input placeholder=\"CSV\" type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"cPagamento.card_cvv\"  name=\"card_cvv\" required></ion-input>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n\t\n\t<div class=\"footer-buttons\" *ngIf=\"cPagamento.card_number != null && cPagamento.holder_name != null && cPagamento.card_expiration != null && cPagamento.card_cvv != null\">\n\t\t<ion-button (click)=\"cadastrarCPagamento()\" color=\"primary\">Cadastrar</ion-button>\n\t</div>\n\n\t<div class=\"footer-buttons\" *ngIf=\"cPagamento.card_number == null || cPagamento.holder_name == null || cPagamento.card_expiration == null || cPagamento.card_cvv == null\">\n\t\t<ion-button color=\"medium\">Cadastrar</ion-button> <!--href=\"/cards-list\"-->\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/cards/edit-card/edit-card.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/menu/cards/edit-card/edit-card.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvY2FyZHMvZWRpdC1jYXJkL2VkaXQtY2FyZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/cards/edit-card/edit-card.page.ts":
/*!********************************************************!*\
  !*** ./src/app/menu/cards/edit-card/edit-card.page.ts ***!
  \********************************************************/
/*! exports provided: EditCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCardPage", function() { return EditCardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_cpagamento_cpagamento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/cpagamento/cpagamento */ "./src/domain/cpagamento/cpagamento.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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





var EditCardPage = /** @class */ (function () {
    function EditCardPage(modalCtrl, route, router, navCtrl, _alertCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.cPagamento = new _domain_cpagamento_cpagamento__WEBPACK_IMPORTED_MODULE_1__["Cpagamento"](null, null, null, null, null, null, null, null);
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.cPagamento.payment_method_code = "credit_card";
    }
    EditCardPage.prototype.ngOnInit = function () { };
    EditCardPage.prototype.testarCC = function (card_number) {
        var cartoes = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            mastercard: /^5[1-5][0-9]{14}/,
            americanExpress: /^3[47][0-9]{13}/,
            dinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
            elo: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\\d|50677[0-8])|(50900\\d|5090[1-9]\\d|509[1-9]\\d{2})|65003[1-3]|(65003[5-9]|65004\\d|65005[0-1])|(65040[5-9]|6504[1-3]\\d)|(65048[5-9]|65049\\d|6505[0-2]\\d|65053[0-8])|(65054[1-9]|6505[5-8]\\d|65059[0-8])|(65070\\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\\d|650920)|(65165[2-9]|6516[6-7]\\d)|(65500\\d|65501\\d)|(65502[1-9]|6550[3-4]\\d|65505[0-8]))[0-9]{10,12}/
        };
        for (var cartao in cartoes) {
            if (card_number.match(cartoes[cartao])) {
                return cartao;
            }
        }
        return false;
    };
    EditCardPage.prototype.cadastrarCPagamento = function () {
        var _this = this;
        var link = 'https://viniciusvillar.000webhostapp.com/vite/page/cadastrar_c_pagamento';
        var data = JSON.stringify({
            idUser: sessionStorage.getItem('usuarioId'),
            payment_method_code: this.cPagamento.payment_method_code,
            payment_company_code: this.testarCC(this.cPagamento.card_number),
            holder_name: this.cPagamento.holder_name,
            card_cvv: this.cPagamento.card_cvv,
            card_expiration: this.cPagamento.card_expiration,
            card_number: this.cPagamento.card_number
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            if (_this.data.response == "sucesso") {
                _this.presentAlert();
                _this.modalCtrl.dismiss(data.status);
            }
        }, function (error) {
            _this.presentFailAlert();
            _this.modalCtrl.dismiss();
        });
    };
    EditCardPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Cadastrado com Sucesso!",
                            buttons: [{ text: 'OK' }]
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
    EditCardPage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Falha na conexão",
                            message: 'Não foi possível cadastrar o usuário. Tente novamente.',
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditCardPage.prototype, "card", void 0);
    EditCardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-card',
            template: __webpack_require__(/*! ./edit-card.page.html */ "./src/app/menu/cards/edit-card/edit-card.page.html"),
            styles: [__webpack_require__(/*! ./edit-card.page.scss */ "./src/app/menu/cards/edit-card/edit-card.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], EditCardPage);
    return EditCardPage;
}());



/***/ }),

/***/ "./src/domain/cpagamento/cpagamento.ts":
/*!*********************************************!*\
  !*** ./src/domain/cpagamento/cpagamento.ts ***!
  \*********************************************/
/*! exports provided: Cpagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cpagamento", function() { return Cpagamento; });
var Cpagamento = /** @class */ (function () {
    function Cpagamento(id, idUser, payment_method_code, payment_company_code, holder_name, card_cvv, card_expiration, card_number) {
        this.id = id;
        this.idUser = idUser;
        this.payment_method_code = payment_method_code;
        this.payment_company_code = payment_company_code;
        this.holder_name = holder_name;
        this.card_cvv = card_cvv;
        this.card_expiration = card_expiration;
        this.card_number = card_number;
    }
    return Cpagamento;
}());



/***/ })

}]);
//# sourceMappingURL=default~menu-cards-cards-module~menu-cards-edit-card-edit-card-module.js.map