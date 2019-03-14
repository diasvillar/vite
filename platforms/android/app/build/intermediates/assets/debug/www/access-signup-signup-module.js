(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-signup-signup-module"],{

/***/ "./src/app/access/signup/signup.module.ts":
/*!************************************************!*\
  !*** ./src/app/access/signup/signup.module.ts ***!
  \************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/access/signup/signup.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/access/signup/signup.page.html":
/*!************************************************!*\
  !*** ./src/app/access/signup/signup.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class=\"access-content\">\n\t\t<p class=\"access-header-message\" no-margin>Crie uma conta Vite e aproveite todas nossas facilidades.</p>\n\t\t<div>\n\t\t\t<div class=\"custom-form-access\" margin-bottom>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"usuario.nome\" name=\"nome\" placeholder=\"Nome completo\" required></ion-input>\n\t\t\t\t<ion-input type=\"email\" [(ngModel)]=\"usuario.email\" name=\"email\" placeholder=\"E-mail\" required></ion-input>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"usuario.password\" name=\"password\" placeholder=\"Senha\" required></ion-input>\n\t\t\t\t<ion-input type=\"password\" #confirmation placeholder=\"Confirmar senha\"required></ion-input>\n\t\t\t</div>\n\t\t\t<ion-button (click)=\"submit()\" color=\"primary\" expand=\"block\" shape=\"round\">Entrar</ion-button>\n\t\t\t<!--<div class=\"button-divisor\"><span>ou</span></div>\n\t\t\t<ion-button color=\"secondary\" expand=\"block\" shape=\"round\">Entrar com Facebook</ion-button>-->\n\t\t</div>\n\t\t<div>\n\t\t\t<ion-anchor href=\"/login\" class=\"access-bottom-text\">\n\t\t\t\tJá possui conta?<br>\n\t\t\t\t<b>Acesse aqui</b>\n\t\t\t</ion-anchor>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/access/signup/signup.page.scss":
/*!************************************************!*\
  !*** ./src/app/access/signup/signup.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-padding: 45px;\n  --background: url('/assets/images/polygon.png') left center no-repeat; }\n\n.access-content {\n  height: 85vh;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzL3NpZ251cC9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFxhY2Nlc3NcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFjO0VBQ2Qsc0VBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osK0JBQThCO0VBQzlCLGNBQWE7RUFDYix1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9hY2Nlc3Mvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1wYWRkaW5nOiA0NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3BvbHlnb24ucG5nJykgbGVmdCBjZW50ZXIgbm8tcmVwZWF0O1xyXG59XHJcbi5hY2Nlc3MtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/access/signup/signup.page.ts":
/*!**********************************************!*\
  !*** ./src/app/access/signup/signup.page.ts ***!
  \**********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _domain_usuario_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/usuario/usuario */ "./src/domain/usuario/usuario.ts");
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




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, _alertCtrl, http) {
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.usuario = new _domain_usuario_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"](null, null, null, null, null);
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.submit = function () {
        var _this = this;
        var link = 'https://viniciusvillar.000webhostapp.com/vite/page/cadastrar_usuario_ionic';
        var data = JSON.stringify({ nome: this.usuario.nome, email: this.usuario.email, password: this.usuario.password });
        if (this.usuario.password == this.conf.value) {
            this.http.post(link, data)
                .subscribe(function (data) {
                _this.data.response = data._body;
                var res = _this.data.response.split("|");
                if (res[1] == "sucesso") {
                    _this.presentAlert();
                    res = res[0].split("*");
                    sessionStorage.setItem("usuarioId", res[0]);
                    sessionStorage.setItem("usuarioName", _this.usuario.nome);
                    sessionStorage.setItem("usuarioLogado", _this.usuario.email);
                    sessionStorage.setItem("flagLogado", "sim");
                    window.localStorage.setItem("usuarioLogado", _this.usuario.email);
                    window.localStorage.setItem("flagLogado", "sim");
                    _this.navCtrl.navigateRoot('/tabs/(home:home)');
                }
            }, function (error) {
                _this.presentFailAlert();
            });
        }
        else {
            this.presentPasswordFailAlert();
        }
    };
    SignupPage.prototype.presentAlert = function () {
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
    SignupPage.prototype.presentFailAlert = function () {
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
    SignupPage.prototype.presentPasswordFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Senhas diferentes",
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmation'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "conf", void 0);
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/access/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/access/signup/signup.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=access-signup-signup-module.js.map