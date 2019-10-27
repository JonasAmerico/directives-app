(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-ng-style></app-ng-style>\r\n<app-ng-class></app-ng-class>\r\n<app-ng-if></app-ng-if> -->\r\n<app-ng-for></app-ng-for>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ng-class/ng-class.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ng-class/ng-class.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Select\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    Please, select one class:\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Choose the Class:\" [(ngModel)]=\"myclass\">\r\n        <mat-option value=\"myclass1\">Class 0</mat-option>\r\n        <mat-option value=\"myclass2\">Class 1</mat-option>\r\n        <mat-option value=\"myclass3\">Class 2</mat-option>\r\n        <mat-option value=\"myclass4\">Class 3</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </mat-card-content>\r\n  <mat-card-footer>\r\n    <p>Result:</p>\r\n    <p [ngClass]=\"myclass\">Teste</p>\r\n  </mat-card-footer>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ng-for/ng-for.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ng-for/ng-for.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let name of names\" >{{ name }}</p>\n<p *ngFor=\"let name of names; let i=index\" >{{ i }}: {{ name }}</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ng-if/ng-if.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ng-if/ng-if.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n    <mat-card-title>\r\n        Select\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n\r\n        <section>\r\n            <p>Select the fields you need:</p>\r\n            <section>\r\n                <mat-checkbox [(ngModel)]=\"showName\" name=\"showName\">Name</mat-checkbox>\r\n                <mat-checkbox [(ngModel)]=\"showAddress\" name=\"showAddress\">Address</mat-checkbox>\r\n                <mat-checkbox [(ngModel)]=\"showPhone\" name=\"showPhone\">Phone</mat-checkbox>\r\n                <mat-checkbox [(ngModel)]=\"showAge\" name=\"showAge\">Age</mat-checkbox>\r\n            </section>\r\n        </section>\r\n\r\n        <br><br>\r\n\r\n        <section>\r\n            <mat-form-field *ngIf=\"showName\">\r\n                <input matInput placeholder=\"Name\">\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"showAddress\">\r\n                <input matInput placeholder=\"Address\">\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"showPhone\">\r\n                <input matInput placeholder=\"Phone\">\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"showAge\">\r\n                <input matInput placeholder=\"Age\" type=\"number\">\r\n            </mat-form-field>\r\n        </section>\r\n\r\n    </mat-card-content>\r\n\r\n    <mat-card-footer>\r\n        <app-sub-ng-if *ngIf=\"showName && showAddress && showPhone && showAge\"></app-sub-ng-if>\r\n    </mat-card-footer>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ng-if/sub-ng-if/sub-ng-if.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ng-if/sub-ng-if/sub-ng-if.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sub-ng-if works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ng-style/ng-style.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ng-style/ng-style.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>\r\n        Select\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <p>Select a color:</p>\r\n        <mat-radio-group [(ngModel)]=\"myColor\" name=\"mycolor\">\r\n            <mat-radio-button value=\"blue\">Blue</mat-radio-button>\r\n            <mat-radio-button value=\"red\">Red</mat-radio-button>\r\n            <mat-radio-button value=\"green\">Green</mat-radio-button>\r\n        </mat-radio-group>\r\n        <br> <br>\r\n        Choose a font size:\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Enter a font size:\" [(ngModel)]=\"myFontSize\" name=\"myfontsize\">\r\n                <mat-option value=\"12px\">Font size: 12 </mat-option>\r\n                <mat-option value=\"16px\">Font size: 16</mat-option>\r\n                <mat-option value=\"20px\">Font size: 20</mat-option>\r\n                <mat-option value=\"30px\">Font size: 30</mat-option>\r\n                <mat-option value=\"40px\">Font size: 40</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-footer>\r\n        <p>Result:</p>\r\n        <p [ngStyle]=\"{ fontSize: myFontSize, color: myColor }\">Teste</p>\r\n    </mat-card-footer>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'directives-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-style/ng-style.component */ "./src/app/ng-style/ng-style.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-class/ng-class.component */ "./src/app/ng-class/ng-class.component.ts");
/* harmony import */ var _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-if/ng-if.component */ "./src/app/ng-if/ng-if.component.ts");
/* harmony import */ var _ng_if_sub_ng_if_sub_ng_if_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-if/sub-ng-if/sub-ng-if.component */ "./src/app/ng-if/sub-ng-if/sub-ng-if.component.ts");
/* harmony import */ var _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ng-for/ng-for.component */ "./src/app/ng-for/ng-for.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_5__["NgStyleComponent"],
            _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_8__["NgClassComponent"],
            _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_9__["NgIfComponent"],
            _ng_if_sub_ng_if_sub_ng_if_component__WEBPACK_IMPORTED_MODULE_10__["SubNgIfComponent"],
            _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_11__["NgForComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ng-class/ng-class.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ng-class/ng-class.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 40px;\n}\n\n.myclass1 {\n  font-size: 16px;\n  color: black;\n  background: blueviolet;\n  padding: 10px;\n}\n\n.myclass2 {\n  font-size: 20px;\n  color: blue;\n  background: red;\n  padding: 20px;\n}\n\n.myclass3 {\n  font-size: 12px;\n  color: violet;\n  background: green;\n  padding: 30x;\n}\n\n.myclass4 {\n  font-size: 42px;\n  color: limegreen;\n  background: blue;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctY2xhc3MvQzpcXGpcXGRpcmVjdGl2ZXMtYXBwL3NyY1xcYXBwXFxuZy1jbGFzc1xcbmctY2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25nLWNsYXNzL25nLWNsYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL25nLWNsYXNzL25nLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG59XHJcbi5teWNsYXNzMSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVldmlvbGV0O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5teWNsYXNzMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxufVxyXG4ubXljbGFzczMge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZpb2xldDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgcGFkZGluZzozMHg7XHJcbn1cclxuLm15Y2xhc3M0IHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59IiwibWF0LWNhcmQge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi5teWNsYXNzMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBibHVldmlvbGV0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubXljbGFzczIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibHVlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5teWNsYXNzMyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZpb2xldDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHBhZGRpbmc6IDMweDtcbn1cblxuLm15Y2xhc3M0IHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBjb2xvcjogbGltZWdyZWVuO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ng-class/ng-class.component.ts":
/*!************************************************!*\
  !*** ./src/app/ng-class/ng-class.component.ts ***!
  \************************************************/
/*! exports provided: NgClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgClassComponent", function() { return NgClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgClassComponent = class NgClassComponent {
    constructor() {
        this.myclass = 'myclass1';
    }
    ngOnInit() {
    }
};
NgClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ng-class',
        template: __webpack_require__(/*! raw-loader!./ng-class.component.html */ "./node_modules/raw-loader/index.js!./src/app/ng-class/ng-class.component.html"),
        styles: [__webpack_require__(/*! ./ng-class.component.scss */ "./src/app/ng-class/ng-class.component.scss")]
    })
], NgClassComponent);



/***/ }),

/***/ "./src/app/ng-for/ng-for.component.scss":
/*!**********************************************!*\
  !*** ./src/app/ng-for/ng-for.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWZvci9uZy1mb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ng-for/ng-for.component.ts":
/*!********************************************!*\
  !*** ./src/app/ng-for/ng-for.component.ts ***!
  \********************************************/
/*! exports provided: NgForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForComponent", function() { return NgForComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgForComponent = class NgForComponent {
    constructor() {
        this.name = [
            "Ana",
            "Jonas",
            "Tica",
            "Lari",
            "Joninhas"
        ];
    }
    ngOnInit() {
    }
};
NgForComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ng-for',
        template: __webpack_require__(/*! raw-loader!./ng-for.component.html */ "./node_modules/raw-loader/index.js!./src/app/ng-for/ng-for.component.html"),
        styles: [__webpack_require__(/*! ./ng-for.component.scss */ "./src/app/ng-for/ng-for.component.scss")]
    })
], NgForComponent);



/***/ }),

/***/ "./src/app/ng-if/ng-if.component.scss":
/*!********************************************!*\
  !*** ./src/app/ng-if/ng-if.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  padding: 10px;\n}\n\nmat-checkbox {\n  padding: 10px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-card {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaWYvQzpcXGpcXGRpcmVjdGl2ZXMtYXBwL3NyY1xcYXBwXFxuZy1pZlxcbmctaWYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25nLWlmL25nLWlmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0ksWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbmctaWYvbmctaWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxubWF0LWNoZWNrYm94IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59IiwiaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ng-if/ng-if.component.ts":
/*!******************************************!*\
  !*** ./src/app/ng-if/ng-if.component.ts ***!
  \******************************************/
/*! exports provided: NgIfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfComponent", function() { return NgIfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgIfComponent = class NgIfComponent {
    constructor() {
        this.showName = false;
        this.showAddress = false;
        this.showPhone = false;
        this.showAge = false;
    }
    ngOnInit() {
    }
};
NgIfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ng-if',
        template: __webpack_require__(/*! raw-loader!./ng-if.component.html */ "./node_modules/raw-loader/index.js!./src/app/ng-if/ng-if.component.html"),
        styles: [__webpack_require__(/*! ./ng-if.component.scss */ "./src/app/ng-if/ng-if.component.scss")]
    })
], NgIfComponent);



/***/ }),

/***/ "./src/app/ng-if/sub-ng-if/sub-ng-if.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ng-if/sub-ng-if/sub-ng-if.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWlmL3N1Yi1uZy1pZi9zdWItbmctaWYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ng-if/sub-ng-if/sub-ng-if.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ng-if/sub-ng-if/sub-ng-if.component.ts ***!
  \********************************************************/
/*! exports provided: SubNgIfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNgIfComponent", function() { return SubNgIfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubNgIfComponent = class SubNgIfComponent {
    constructor() {
        console.log("SubNgIfComponent");
    }
    ngOnInit() {
    }
};
SubNgIfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-ng-if',
        template: __webpack_require__(/*! raw-loader!./sub-ng-if.component.html */ "./node_modules/raw-loader/index.js!./src/app/ng-if/sub-ng-if/sub-ng-if.component.html"),
        styles: [__webpack_require__(/*! ./sub-ng-if.component.scss */ "./src/app/ng-if/sub-ng-if/sub-ng-if.component.scss")]
    })
], SubNgIfComponent);



/***/ }),

/***/ "./src/app/ng-style/ng-style.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ng-style/ng-style.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\nmat-radio-button {\n  padding-bottom: 20px;\n}\n\nmat-card {\n  margin: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctc3R5bGUvQzpcXGpcXGRpcmVjdGl2ZXMtYXBwL3NyY1xcYXBwXFxuZy1zdHlsZVxcbmctc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25nLXN0eWxlL25nLXN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0NBOztBRENBO0VBQ0Msb0JBQUE7QUNFRDs7QURDQTtFQUNJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL25nLXN0eWxlL25nLXN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXJhZGlvLWdyb3VwIHtcclxuZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG59XHJcbiIsIm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ng-style/ng-style.component.ts":
/*!************************************************!*\
  !*** ./src/app/ng-style/ng-style.component.ts ***!
  \************************************************/
/*! exports provided: NgStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStyleComponent", function() { return NgStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgStyleComponent = class NgStyleComponent {
    constructor() {
        this.myFontSize = '1px';
        this.myColor = 'blue';
    }
    ngOnInit() {
    }
};
NgStyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ng-style',
        template: __webpack_require__(/*! raw-loader!./ng-style.component.html */ "./node_modules/raw-loader/index.js!./src/app/ng-style/ng-style.component.html"),
        styles: [__webpack_require__(/*! ./ng-style.component.scss */ "./src/app/ng-style/ng-style.component.scss")]
    })
], NgStyleComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\j\directives-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map