(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-login-login-module"],{

/***/ "./src/app/access/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/access/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/access/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/access/login/login.page.html":
/*!**********************************************!*\
  !*** ./src/app/access/login/login.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class=\"access-content\">\n\t\t<img src=\"assets/images/logo_verde.png\">\n\t\t<div>\n\t\t\t<p class=\"access-header-message\">Bem-vindo a uma nova experiência</p>\n\t\t\t<div class=\"custom-form-access\" margin-bottom>\n\t\t\t\t<ion-input type=\"email\" [(ngModel)]=\"usuario.email\" name=\"email\" placeholder=\"E-mail\" required></ion-input>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"usuario.password\" name=\"password\" placeholder=\"Senha\" required></ion-input>\n\t\t\t</div>\n\t\t\t<ion-button (click)=\"submit()\" color=\"primary\" expand=\"block\" shape=\"round\">Entrar</ion-button>\n\t\t\t<!--<div class=\"button-divisor\"><span>ou</span></div>\n\t\t\t<ion-button color=\"secondary\" class=\"gradient\" expand=\"block\" shape=\"round\">Entrar com Facebook</ion-button>-->\n\t\t</div>\n\t\t<div>\n\t\t\t<ion-anchor href=\"/signup\" class=\"access-bottom-text\">\n\t\t\t\tAinda não possui conta?<br>\n\t\t\t\t<b>Crie agora mesmo!</b>\n\t\t\t</ion-anchor>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/access/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/access/login/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-padding: 45px;\n  --background: url('/assets/images/polygon.png') left center no-repeat; }\n\n.access-content {\n  height: 85vh;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzL2xvZ2luL0M6XFxEZXNlbnZvbHZpbWVudG9cXGlvbmljXFxGcm9udEVuZC1WaXRlVjIvc3JjXFxhcHBcXGFjY2Vzc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFjO0VBQ2Qsc0VBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osK0JBQThCO0VBQzlCLGNBQWE7RUFDYix1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9hY2Nlc3MvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tcGFkZGluZzogNDVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9wb2x5Z29uLnBuZycpIGxlZnQgY2VudGVyIG5vLXJlcGVhdDtcclxufVxyXG4uYWNjZXNzLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/access/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/access/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, _alertCtrl, http) {
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.usuario = new _domain_usuario_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"](null, null, null, null, null);
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.submit = function () {
        var _this = this;
        var link = 'https://viniciusvillar.000webhostapp.com/vite/page/login_ionic';
        var data = JSON.stringify({ email: this.usuario.email, password: this.usuario.password });
        //iniciando a conexão http para cadastro via JSON
        this.http.post(link, data)
            .subscribe(function (data) {
            console.log(data);
            _this.data.response = data._body;
            //console.log (this.data.response);
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                res = res[0].split("*");
                sessionStorage.setItem("usuarioId", res[0]);
                sessionStorage.setItem("usuarioName", res[1]);
                sessionStorage.setItem("usuarioLogado", _this.usuario.email);
                sessionStorage.setItem("flagLogado", "sim");
                window.localStorage.setItem("usuarioLogado", _this.usuario.email);
                window.localStorage.setItem("flagLogado", "sim");
                _this.navCtrl.navigateRoot('/tabs/(home:home)');
            }
            else if (res[0] == "Email ou senha inválidos") {
                console.log("Login ou Senha inválidos");
                _this.presentFailAlert();
            }
        }, function (error) {
            console.log("Ocorreu algum erro!");
        });
    };
    LoginPage.prototype.presentFailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertCtrl.create({
                            header: "Erro",
                            message: 'E-mail ou senha inválidos!',
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
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/access/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/access/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=access-login-login-module.js.map