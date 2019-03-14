(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-68ea58b8.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-68ea58b8.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var iosTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 162).then(__webpack_require__.bind(null, /*! ./ios.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js"))},mdTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 163).then(__webpack_require__.bind(null, /*! ./md.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/md.transition.js"))};function transition(e){return new Promise(function(n,i){e.queue.write(function(){beforeTransition(e),runTransition(e).then(function(i){i.animation&&i.animation.destroy(),afterTransition(e),n(i)},function(n){afterTransition(e),i(n)})})})}function beforeTransition(e){var n=e.enteringEl,i=e.leavingEl;setZIndex(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),setPageHidden(n,!1),i&&setPageHidden(i,!1)}function runTransition(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(e)];case 1:return[2,(n=i.sent())?animation(n,e):noAnimation(e)]}})})}function afterTransition(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function getAnimationBuilder(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})}function animation(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,waitForReady(n,!0)];case 1:return t.sent(),[4,n.animationCtrl.create(e,n.baseEl,n)];case 2:return i=t.sent(),fireWillEvents(n.enteringEl,n.leavingEl),[4,playTransition(i,n)];case 3:return t.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&fireDidEvents(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return n=e.enteringEl,i=e.leavingEl,[4,waitForReady(e,!1)];case 1:return t.sent(),fireWillEvents(n,i),fireDidEvents(n,i),[2,{hasCompleted:!0}]}})})}function waitForReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return i=(void 0!==e.deepWait?e.deepWait:n)?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e?[4,e(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(e,n){var i=n.progressCallback,t=new Promise(function(n){return e.onFinish(n)});return i?(e.progressStart(),i(e)):e.play(),t}function fireWillEvents(e,n){lifecycle(n,"ionViewWillLeave"),lifecycle(e,"ionViewWillEnter")}function fireDidEvents(e,n){lifecycle(e,"ionViewDidEnter"),lifecycle(n,"ionViewDidLeave")}function lifecycle(e,n){if(e){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function shallowReady(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function deepReady(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function setZIndex(e,n,i){void 0!==e&&(e.style.zIndex="back"===i?"99":"101"),void 0!==n&&(n.style.zIndex="100")}

/***/ }),

/***/ "./src/app/menu/history/history-details/history-details.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/menu/history/history-details/history-details.module.ts ***!
  \************************************************************************/
/*! exports provided: HistoryDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailsPageModule", function() { return HistoryDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _history_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-details.page */ "./src/app/menu/history/history-details/history-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HistoryDetailsPageModule = /** @class */ (function () {
    function HistoryDetailsPageModule() {
    }
    HistoryDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_history_details_page__WEBPACK_IMPORTED_MODULE_4__["HistoryDetailsPage"]]
        })
    ], HistoryDetailsPageModule);
    return HistoryDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/menu/history/history-details/history-details.page.html":
/*!************************************************************************!*\
  !*** ./src/app/menu/history/history-details/history-details.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class=\"list-status\">\n\t\t<!-- <ion-icon src=\"assets/images/check-circle.svg\"></ion-icon> -->\n\t\t<div *ngIf='history[\"status\"] == 4'>\n\t\t\t<p class=\"status active\">Pedido Confirmado</p>\n\t\t\t<p class=\"status active\">Pedido em separação</p>\n\t\t\t<p class=\"status active\">Pedido Pronto</p>\n\t\t\t<p class=\"status active\">Pedido Entregue</p>\n\t\t</div>\n\n\t\t<div *ngIf='history[\"status\"] == 3'>\n\t\t\t<p class=\"status active\">Pedido Confirmado</p>\n\t\t\t<p class=\"status active\">Pedido em Preparo</p>\n\t\t\t<p class=\"status active\">Pedido Pronto</p>\n\t\t\t<p class=\"status\">Pedido Entregue</p>\n\t\t</div>\n\n\t\t<div *ngIf='history[\"status\"] == 2'>\n\t\t\t<p class=\"status active\">Pedido Confirmado</p>\n\t\t\t<p class=\"status active\">Pedido em Preparo</p>\n\t\t\t<p class=\"status \">Pedido Pronto</p>\n\t\t\t<p class=\"status\">Pedido Entregue</p>\n\t\t</div>\n\n\t\t<div *ngIf='history[\"status\"] == 1'>\n\t\t\t<p class=\"status active\">Pedido Confirmado</p>\n\t\t\t<p class=\"status \">Pedido em Preparo</p>\n\t\t\t<p class=\"status \">Pedido Pronto</p>\n\t\t\t<p class=\"status\">Pedido Entregue</p>\n\t\t</div>\n\n\t\t<div *ngIf='history[\"status\"] == 0'>\n\t\t\t<p class=\"status \">Pedido Confirmado</p>\n\t\t\t<p class=\"status \">Pedido em Preparo</p>\n\t\t\t<p class=\"status \">Pedido Pronto</p>\n\t\t\t<p class=\"status\">Pedido Entregue</p>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/history/history-details/history-details.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/menu/history/history-details/history-details.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-status {\n  position: relative; }\n  .list-status .status {\n    color: var(--ion-color-light-shade);\n    font-size: 18px;\n    line-height: 18px;\n    align-items: center;\n    display: flex;\n    margin-bottom: 2rem; }\n  .list-status .status b {\n      margin-right: 5px; }\n  .list-status .status span {\n      font-size: 12px; }\n  .list-status .status::before {\n      content: ' ';\n      height: 13px;\n      width: 13px;\n      border-radius: 100%;\n      background-color: var(--ion-color-light-shade);\n      display: inline-block;\n      margin-right: 1rem;\n      z-index: 9999; }\n  .list-status .status.active {\n      color: var(--ion-color-dark); }\n  .list-status .status.active::before {\n        background-color: var(--ion-color-primary); }\n  .list-status::before {\n    width: 2px;\n    position: absolute;\n    height: calc(100% - (13px * 2));\n    top: 13px;\n    left: calc((13px / 2.3));\n    content: ' ';\n    background-color: var(--ion-color-light-shade);\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9oaXN0b3J5L2hpc3RvcnktZGV0YWlscy9DOlxcRGVzZW52b2x2aW1lbnRvXFxpb25pY1xcRnJvbnRFbmQtVml0ZVYyL3NyY1xcYXBwXFxtZW51XFxoaXN0b3J5XFxoaXN0b3J5LWRldGFpbHNcXGhpc3RvcnktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBa0IsRUF5Q2xCO0VBMUNEO0lBR0Usb0NBQW1DO0lBQ25DLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixjQUFhO0lBQ2Isb0JBQW1CLEVBdUJuQjtFQS9CRjtNQVVHLGtCQUFpQixFQUNqQjtFQVhIO01BYUcsZ0JBQWUsRUFDZjtFQWRIO01BZ0JHLGFBQVk7TUFDWixhQUFZO01BQ1osWUFBVztNQUNYLG9CQUFtQjtNQUNuQiwrQ0FBOEM7TUFDOUMsc0JBQXFCO01BQ3JCLG1CQUFrQjtNQUNsQixjQUFhLEVBQ2I7RUF4Qkg7TUEwQkcsNkJBQTRCLEVBSTVCO0VBOUJIO1FBNEJJLDJDQUEwQyxFQUMxQztFQTdCSjtJQWlDRSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLGdDQUErQjtJQUMvQixVQUFTO0lBQ1QseUJBQXdCO0lBQ3hCLGFBQVk7SUFDWiwrQ0FBOEM7SUFDOUMsZUFBYyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVudS9oaXN0b3J5L2hpc3RvcnktZGV0YWlscy9oaXN0b3J5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qtc3RhdHVzIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LnN0YXR1cyB7XHJcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cdFx0YiB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0fVxyXG5cdFx0c3BhbiB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdH1cclxuXHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdGNvbnRlbnQ6ICcgJztcclxuXHRcdFx0aGVpZ2h0OiAxM3B4O1xyXG5cdFx0XHR3aWR0aDogMTNweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblx0XHRcdHotaW5kZXg6IDk5OTk7XHJcblx0XHR9XHJcblx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcblx0XHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdCY6OmJlZm9yZSB7XHJcblx0XHR3aWR0aDogMnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAoMTNweCAqIDIpKTtcclxuXHRcdHRvcDogMTNweDtcclxuXHRcdGxlZnQ6IGNhbGMoKDEzcHggLyAyLjMpKTtcclxuXHRcdGNvbnRlbnQ6ICcgJztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/history/history-details/history-details.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/menu/history/history-details/history-details.page.ts ***!
  \**********************************************************************/
/*! exports provided: HistoryDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailsPage", function() { return HistoryDetailsPage; });
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


var HistoryDetailsPage = /** @class */ (function () {
    function HistoryDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.history = this.navParams.get('history');
    }
    HistoryDetailsPage.prototype.ngOnInit = function () {
        console.log("history: " + this.history["status"] + "\n");
    };
    HistoryDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-details',
            template: __webpack_require__(/*! ./history-details.page.html */ "./src/app/menu/history/history-details/history-details.page.html"),
            styles: [__webpack_require__(/*! ./history-details.page.scss */ "./src/app/menu/history/history-details/history-details.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]])
    ], HistoryDetailsPage);
    return HistoryDetailsPage;
}());



/***/ }),

/***/ "./src/domain/cart/cart.ts":
/*!*********************************!*\
  !*** ./src/domain/cart/cart.ts ***!
  \*********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart(id, pedidos, usuario, valor_total, nome, email, 
    //public observacao: string,
    metodo, retirada, horario, dezPorCento, cupomDesc) {
        this.id = id;
        this.pedidos = pedidos;
        this.usuario = usuario;
        this.valor_total = valor_total;
        this.nome = nome;
        this.email = email;
        this.metodo = metodo;
        this.retirada = retirada;
        this.horario = horario;
        this.dezPorCento = dezPorCento;
        this.cupomDesc = cupomDesc;
    }
    return Cart;
}());



/***/ }),

/***/ "./src/domain/usuario/usuario.ts":
/*!***************************************!*\
  !*** ./src/domain/usuario/usuario.ts ***!
  \***************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email, password, status) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    return Usuario;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map