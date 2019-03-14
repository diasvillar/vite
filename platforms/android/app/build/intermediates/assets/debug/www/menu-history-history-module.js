(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-history-history-module"],{

/***/ "./src/app/menu/history/history.module.ts":
/*!************************************************!*\
  !*** ./src/app/menu/history/history.module.ts ***!
  \************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history.page */ "./src/app/menu/history/history.page.ts");
/* harmony import */ var _history_details_history_details_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-details/history-details.module */ "./src/app/menu/history/history-details/history-details.module.ts");
/* harmony import */ var _history_details_history_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history-details/history-details.page */ "./src/app/menu/history/history-details/history-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_5__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _history_details_history_details_module__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailsPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_5__["HistoryPage"]],
            entryComponents: [_history_details_history_details_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDetailsPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/menu/history/history.page.html":
/*!************************************************!*\
  !*** ./src/app/menu/history/history.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\t<ion-toolbar transparent>\n\t\t<ion-title>Histórico de Pedidos</ion-title>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/tabs/(menu:menu)\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding >\n\t<ion-list *ngFor='let cart of carts; let i = index;' class=\"history-list\">\n\t\t<ion-item button no-padding (click)=\"details(cart.status)\">\n\t\t\t<div class=\"info\">\n\t\t\t\t<div class=\"date\">\n\t\t\t\t\t<span class=\"day\">{{day[i]}}</span>\n\t\t\t\t\t<span>{{month[i]}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"history-content\">\n\t\t\t\t\t<div class=\"title\">Octavio Café - Eldorado</div>\n\t\t\t\t\t<div *ngFor='let pedido of cart.pedidos'>\n\t\t\t\t\t\t<div class=\"item\" *ngIf=\"pedido.cardapio != null\">{{pedido.quantidade}}x {{pedido.cardapio.nome}}</div>\n\t\t\t\t\t\t<div class=\"item\" *ngIf=\"pedido.cardapio == null\">{{pedido.quantidade}}x {{pedido.cardapioGeral.nome}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"value\">Valor total</div>\n\t\t\t\t\t<div class=\"price\">R${{cart.valor_total + cart.dezPorCento}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/history/history.page.scss":
/*!************************************************!*\
  !*** ./src/app/menu/history/history.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".history-list ion-item .info {\n  width: 100%;\n  padding-bottom: 1rem;\n  display: flex;\n  justify-content: space-between; }\n  .history-list ion-item .info .date {\n    background: var(--ion-color-medium-tint);\n    color: #fff;\n    font-size: 14px;\n    min-width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border-radius: 5px; }\n  .history-list ion-item .info .date .day {\n      font-size: 12px; }\n  .history-list ion-item .info .history-content {\n    width: calc(100% - 50px);\n    margin-left: 1rem;\n    font-size: 14px; }\n  .history-list ion-item .info .history-content .title {\n      color: var(--ion-color-primary);\n      font-size: 17px;\n      font-weight: bold;\n      margin-bottom: 0.4rem; }\n  .history-list ion-item .info .history-content .item {\n      color: var(--ion-color-dark-tint);\n      margin-bottom: 0.4rem; }\n  .history-list ion-item .info .history-content .value {\n      color: var(--ion-color-dark);\n      margin-top: 0.7rem;\n      margin: 0.7rem 0px 0.3rem 0px;\n      font-weight: bold; }\n  .history-list ion-item .info .history-content .price {\n      color: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9oaXN0b3J5L0M6XFxEZXNlbnZvbHZpbWVudG9cXGlvbmljXFxGcm9udEVuZC1WaXRlVjIvc3JjXFxhcHBcXG1lbnVcXGhpc3RvcnlcXGhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csWUFBVztFQUNYLHFCQUFvQjtFQUNwQixjQUFhO0VBQ2IsK0JBQThCLEVBd0M5QjtFQTlDSDtJQVFJLHlDQUF3QztJQUN4QyxZQUFXO0lBQ1gsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLGFBQVk7SUFDWixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2Qix1QkFBc0I7SUFDdEIsbUJBQWtCLEVBSWxCO0VBckJKO01BbUJLLGdCQUFlLEVBQ2Y7RUFwQkw7SUF1QkkseUJBQXdCO0lBQ3hCLGtCQUFpQjtJQUNqQixnQkFBZSxFQW9CZjtFQTdDSjtNQTJCSyxnQ0FBK0I7TUFDL0IsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsc0JBQXFCLEVBQ3JCO0VBL0JMO01BaUNLLGtDQUFpQztNQUNqQyxzQkFBcUIsRUFDckI7RUFuQ0w7TUFxQ0ssNkJBQTRCO01BQzVCLG1CQUFrQjtNQUNsQiw4QkFBNkI7TUFDN0Isa0JBQWlCLEVBQ2pCO0VBekNMO01BMkNLLGdDQUErQixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LWxpc3Qge1xyXG5cdGlvbi1pdGVtIHtcclxuXHRcdC5pbmZvIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdC5kYXRlIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDUwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHQuZGF5IHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Lmhpc3RvcnktY29udGVudCB7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuaXRlbSB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjRyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC52YWx1ZSB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMC43cmVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLjdyZW0gMHB4IDAuM3JlbSAwcHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByaWNlIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/menu/history/history.page.ts":
/*!**********************************************!*\
  !*** ./src/app/menu/history/history.page.ts ***!
  \**********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _history_details_history_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-details/history-details.page */ "./src/app/menu/history/history-details/history-details.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var HistoryPage = /** @class */ (function () {
    function HistoryPage(modalCtrl, navCtrl, _http, _loadingCtrl, _alertCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.router = router;
        this.checkStatus = true;
        this.day = new Array();
        this.month = new Array();
    }
    HistoryPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sessionStorage.getItem('flagLogado') != "sim")) return [3 /*break*/, 1];
                        this.goToLogin();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this._http
                            .get('https://viniciusvillar.000webhostapp.com/vite/page/get_ionic_cart_json/' + sessionStorage.getItem('usuarioId'))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }))
                            .toPromise()
                            .then(function (carts) {
                            //console.log("Cart : "+ JSON.stringify(carts) + "\n\n\n");
                            _this.carts = carts.reverse();
                            for (var x = 0; x < _this.carts.length; x++) {
                                _this.carts[x].valor_total = Number(_this.carts[x].valor_total);
                                _this.carts[x].dezPorCento = Number(_this.carts[x].dezPorCento);
                                _this.day.push(_this.carts[x].horario.substring(8, 10));
                                if (_this.carts[x].horario.substring(5, 7) == "01")
                                    _this.month.push("JAN");
                                else if (_this.carts[x].horario.substring(5, 7) == "02")
                                    _this.month.push("FEV");
                                else if (_this.carts[x].horario.substring(5, 7) == "03")
                                    _this.month.push("MAR");
                                else if (_this.carts[x].horario.substring(5, 7) == "04")
                                    _this.month.push("ABR");
                                else if (_this.carts[x].horario.substring(5, 7) == "05")
                                    _this.month.push("MAI");
                                else if (_this.carts[x].horario.substring(5, 7) == "06")
                                    _this.month.push("JUN");
                                else if (_this.carts[x].horario.substring(5, 7) == "07")
                                    _this.month.push("JUL");
                                else if (_this.carts[x].horario.substring(5, 7) == "08")
                                    _this.month.push("AGO");
                                else if (_this.carts[x].horario.substring(5, 7) == "09")
                                    _this.month.push("SET");
                                else if (_this.carts[x].horario.substring(5, 7) == "10")
                                    _this.month.push("OUT");
                                else if (_this.carts[x].horario.substring(5, 7) == "11")
                                    _this.month.push("NOV");
                                else if (_this.carts[x].horario.substring(5, 7) == "12")
                                    _this.month.push("DEZ");
                            }
                            if (_this.carts.length == 0) {
                                _this.checkStatus = false;
                            }
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
    HistoryPage.prototype.presentFailAlert = function () {
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
    HistoryPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    HistoryPage.prototype.details = function (status) {
        this.modalCtrl.create({
            component: _history_details_history_details_page__WEBPACK_IMPORTED_MODULE_2__["HistoryDetailsPage"],
            componentProps: { history: { status: status } },
            showBackdrop: true,
            backdropDismiss: true,
            cssClass: 'custom-modal'
        }).then(function (modal) {
            modal.present();
        });
    };
    HistoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.page.html */ "./src/app/menu/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/menu/history/history.page.scss")],
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-history-history-module.js.map