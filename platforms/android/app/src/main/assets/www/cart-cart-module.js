(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>Shopping Cart</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home'></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"shoppingCart.length>0;else noitem\">\n    <div *ngFor=\"let cartitem of shoppingCart\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size='8'>\n            <ion-img [src]=\"cartitem.imgurl\" style=\"height:100px;width:100px\"></ion-img>\n            <h1>{{cartitem.name}}</h1>\n          </ion-col>\n          <ion-col size='4'>\n            <ion-button (click)='deleteItem(cartitem.id)'>\n              <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button (click)='deletefromhome(cartitem.id)'>\n              BUY\n            </ion-button>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <ng-template #noitem>\n    <ion-img src=\"https://www.sccpre.cat/mypng/detail/104-1047279_empty-cart-empty-cart-png.png\"></ion-img>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_itemservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/itemservice.service */ "./src/app/itemservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CartPage = /** @class */ (function () {
    function CartPage(itemservice, alertctrl, router) {
        this.itemservice = itemservice;
        this.alertctrl = alertctrl;
        this.router = router;
        this.shoppingCart = [];
    }
    CartPage.prototype.ngOnInit = function () {
        var _this = this;
        this.itemservice.CartItems.subscribe(function (cartItems) {
            _this.shoppingCart = cartItems;
        });
        //   // this.itemservice.shoppingSubject.subscribe((items:Items[])=>{
        //   // this.shoppingCart=items;
        //  // console.log('cart',this.shoppingCart);
        // });
    };
    CartPage.prototype.ionViewWillEnter = function () {
        this.itemservice.fetchCartItems().subscribe();
    };
    CartPage.prototype.deleteItem = function (id) {
        var _this = this;
        // console.log('id taken',id);
        this.alertctrl.create({
            header: "Are you Sure?",
            message: "Delete item",
            buttons: [
                {
                    text: "NO",
                    role: 'cancel'
                },
                {
                    text: "YES",
                    handler: function () {
                        _this.itemservice.deleteCartItem(id).subscribe(function (items) {
                            // console.log('deleted',items );
                        });
                    }
                }
            ]
        }).then(function (alert) {
            alert.present();
        });
    };
    CartPage.prototype.deletefromhome = function (id) {
        this.itemservice.deletehomeitem(id).subscribe();
        this.router.navigate(["/home"]);
        this.itemservice.deleteCartItem(id).subscribe();
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_itemservice_service__WEBPACK_IMPORTED_MODULE_2__["ItemserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map