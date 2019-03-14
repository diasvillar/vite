(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-config-config-module"],{

/***/ "./src/app/menu/config/config.module.ts":
/*!**********************************************!*\
  !*** ./src/app/menu/config/config.module.ts ***!
  \**********************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.page */ "./src/app/menu/config/config.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_5__["ConfigPage"]
    }
];
var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_config_page__WEBPACK_IMPORTED_MODULE_5__["ConfigPage"]]
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());



/***/ }),

/***/ "./src/app/menu/config/config.page.html":
/*!**********************************************!*\
  !*** ./src/app/menu/config/config.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\t<ion-toolbar transparent>\n\t\t<ion-title>Configuração</ion-title>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/tabs/(menu:menu)\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding fullscreen>\n\t<img [src]=\"'assets/images/avatar.png'\" class=\"avatar\">\n\t<ion-item no-padding>\n\t\t<ion-label position=\"floating\">Nome</ion-label>\n\t\t<ion-input type=\"text\"></ion-input>\n\t</ion-item>\n\t<ion-item no-padding>\n\t\t<ion-label position=\"floating\">Telefone</ion-label>\n\t\t<ion-input type=\"tel\"></ion-input>\n\t</ion-item>\n\t<ion-item no-padding>\n\t\t<ion-label position=\"floating\">E-mail</ion-label>\n\t\t<ion-input type=\"email\"></ion-input>\n\t</ion-item>\n\t<ion-item no-padding>\n\t\t<ion-label position=\"floating\">Senha</ion-label>\n\t\t<ion-input type=\"password\"></ion-input>\n\t</ion-item>\n\t<ion-list lines=\"none\">\n\t\t<ion-item no-padding>\n\t\t\t<ion-label>Ativar notificações?</ion-label>\n\t\t\t<ion-toggle slot=\"end\" color=\"primary\" checked></ion-toggle>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-button color=\"medium\" fill=\"clear\">Limpar histórico de buscas</ion-button>\n</ion-content>\n\n<ion-footer no-border>\n\t<ion-button color=\"primary\" expand=\"full\">Salvar</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/menu/config/config.page.scss":
/*!**********************************************!*\
  !*** ./src/app/menu/config/config.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 30px; }\n\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%; }\n\nion-item ion-label {\n  color: var(--ion-color-dark); }\n\nion-item ion-button {\n  color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium-shade); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb25maWcvQzpcXERlc2Vudm9sdmltZW50b1xcaW9uaWNcXEZyb250RW5kLVZpdGVWMi9zcmNcXGFwcFxcbWVudVxcY29uZmlnXFxjb25maWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQWMsRUFDZDs7QUFDRDtFQUNDLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQW1CLEVBQ25COztBQUVEO0VBRUUsNkJBQTRCLEVBQzVCOztBQUhGO0VBS0UsNkJBQTRCO0VBQzVCLG1EQUFvQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvY29uZmlnL2NvbmZpZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1wYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4uYXZhdGFyIHtcclxuXHR3aWR0aDogODBweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG5cdGlvbi1sYWJlbCB7XHJcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdH1cclxuXHRpb24tYnV0dG9uIHtcclxuXHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcblx0XHQtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/config/config.page.ts":
/*!********************************************!*\
  !*** ./src/app/menu/config/config.page.ts ***!
  \********************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigPage = /** @class */ (function () {
    function ConfigPage() {
    }
    ConfigPage.prototype.ngOnInit = function () {
    };
    ConfigPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.page.html */ "./src/app/menu/config/config.page.html"),
            styles: [__webpack_require__(/*! ./config.page.scss */ "./src/app/menu/config/config.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ConfigPage);
    return ConfigPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-config-config-module.js.map