(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.page.html":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title text-center>Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home'></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink='/cart'>\n        <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"itemDetail\">\n  <ion-img [src]=\"itemDetail.imgurl\" >\n  </ion-img>\n  <h1>{{itemDetail.name}}</h1>\n  <h1><b>&#8377;{{itemDetail.price}}</b></h1>\n  <ion-button (click)='addtocart()'>\n    ADD TO CART \n    <ion-icon name=\"cart\" slot=\"end\"></ion-icon>\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_itemservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/itemservice.service */ "./src/app/itemservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var DetailPage = /** @class */ (function () {
    function DetailPage(route, router, itemserve, loadingctrl) {
        this.route = route;
        this.router = router;
        this.itemserve = itemserve;
        this.loadingctrl = loadingctrl;
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (path) {
            if (!path.has('Id')) {
                _this.router.navigate(["/home"]);
                return;
            }
            var id = path.get('Id');
            // console.log(id);
            _this.itemserve.getItem(id).subscribe(function (singleitem) {
                _this.itemDetail = singleitem;
                //     console.log('itemDetail', this.itemDetail);
            });
            // console.log(this.itemDetail);
        });
    };
    DetailPage.prototype.addtocart = function () {
        var _this = this;
        this.loadingctrl.create({
            message: 'Adding. . .',
            duration: 5000
        }).then(function (loading) {
            loading.present();
            _this.itemserve.addItemToCart(_this.itemDetail).subscribe(function () {
                _this.loadingctrl.dismiss();
                _this.router.navigate(['/cart']);
            });
        });
    };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.page.html */ "./src/app/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_itemservice_service__WEBPACK_IMPORTED_MODULE_3__["ItemserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map