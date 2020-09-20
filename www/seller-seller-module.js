(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-module"],{

/***/ "./src/app/seller/seller.module.ts":
/*!*****************************************!*\
  !*** ./src/app/seller/seller.module.ts ***!
  \*****************************************/
/*! exports provided: SellerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerPageModule", function() { return SellerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seller_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller.page */ "./src/app/seller/seller.page.ts");







var routes = [
    {
        path: '',
        component: _seller_page__WEBPACK_IMPORTED_MODULE_6__["SellerPage"]
    }
];
var SellerPageModule = /** @class */ (function () {
    function SellerPageModule() {
    }
    SellerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_seller_page__WEBPACK_IMPORTED_MODULE_6__["SellerPage"]]
        })
    ], SellerPageModule);
    return SellerPageModule;
}());



/***/ }),

/***/ "./src/app/seller/seller.page.html":
/*!*****************************************!*\
  !*** ./src/app/seller/seller.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>Add a Product</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home'></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"SellerForm\" (ngSubmit)=\"SubmitData()\">\n  <ion-item>\n    <ion-label position=\"floating\">Enter Seller Name:</ion-label>\n    <ion-input type=\"text\" formControlName=\"name\" class=\"form-control\"></ion-input>\n    <span style=\"color:red\" *ngIf=\"SellerForm.controls['name'].invalid&&SellerForm.controls['name'].touched\">Please enter a name !</span>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\"> Enter Product Name:</ion-label>\n    <ion-input type=\"text\" formControlName=\"productname\" class=\"form-control\"></ion-input>\n    <span style=\"color:red\" *ngIf=\"SellerForm.controls['productname'].invalid&&SellerForm.controls['productname'].touched\">Please enter product name !</span>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Select Gender:</ion-label>\n  </ion-item>\n\n  <ion-radio-group formControlName=\"gender\" class=\"form-control\">\n    <ion-item>\n      <ion-label>MALE</ion-label>\n      <ion-radio slot=\"start\" value=\"Male\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>FEMALE</ion-label>\n      <ion-radio slot=\"start\" value=\"Female\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n\n  <ion-item>\n    <ion-button (click)=\"PresentActionSheet()\"><ion-icon name=\"aperture\" slot=\"start\"></ion-icon>ADD PICTURE</ion-button>\n    <ion-img [src]=\"imageUrl\" *ngIf=\"imageUrl\"></ion-img>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Enter Price:</ion-label>\n    <ion-input type=\"number\" formControlName=\"price\" class=\"form-control\"></ion-input>\n  </ion-item>\n\n\n  <ion-card>\n    <ion-card-header style=\"color:black;font-size:18px\"><b>Specifications:</b></ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Brand New</ion-label>\n        <ion-checkbox formControlName=\"checkbox1\" class=\"form-control\" (ionChange)=\"option1('Brand New',$event)\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Is in good condition</ion-label>\n        <ion-checkbox formControlName=\"checkbox2\" class=\"form-control\"  (ionChange)=\"option2('Is in good condition',$event)\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Price Negotiable</ion-label>\n        <ion-checkbox formControlName=\"checkbox3\" class=\"form-control\" (ionChange)=\"option3('Price Negotiable',$event)\"></ion-checkbox>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-button type=\"submit\" [disabled]=\"!SellerForm.valid\">Submit</ion-button>\n</form>\n</ion-content>"

/***/ }),

/***/ "./src/app/seller/seller.page.scss":
/*!*****************************************!*\
  !*** ./src/app/seller/seller.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/seller/seller.page.ts":
/*!***************************************!*\
  !*** ./src/app/seller/seller.page.ts ***!
  \***************************************/
/*! exports provided: SellerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerPage", function() { return SellerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_itemservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/itemservice.service */ "./src/app/itemservice.service.ts");
/* harmony import */ var _home_home_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.model */ "./src/app/home/home.model.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");








var SellerPage = /** @class */ (function () {
    //isLoading=false;
    function SellerPage(formbuilder, navctrl, itemserve, loadingctrl, camera, actionSheetCtrl) {
        this.formbuilder = formbuilder;
        this.navctrl = navctrl;
        this.itemserve = itemserve;
        this.loadingctrl = loadingctrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.SellerForm = this.formbuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkbox1: ['false'],
            checkbox2: ['false'],
            checkbox3: ['false']
        });
    }
    SellerPage.prototype.ngOnInit = function () {
    };
    SellerPage.prototype.option1 = function (value1, event) {
        if (event.detail.checked) {
            this.checkvalue1 = value1;
            // console.log('value1',this.checkvalue1);
        }
    };
    SellerPage.prototype.option2 = function (value2, event) {
        if (event.detail.checked) {
            this.checkvalue2 = value2;
            // console.log('value2',this.checkvalue2);
        }
    };
    SellerPage.prototype.option3 = function (value3, event) {
        if (event.detail.checked) {
            this.checkvalue3 = value3;
            //console.log('value3',this.checkvalue3);
        }
    };
    // SubmitData()
    // {
    //  let value=this.SellerForm.value;
    //  console.log(value);
    //  const object=new Forms(value.name,value.price);
    //  console.log(object);
    //  this.itemserve.addformitem(object);
    //  this.navctrl.navigateForward('/home');
    //  this.SellerForm.reset();
    // }
    SellerPage.prototype.SubmitData = function () {
        var _this = this;
        var value = this.SellerForm.value;
        // console.log(value); 
        var object = new _home_home_model__WEBPACK_IMPORTED_MODULE_5__["Items"]('1', value.productname, this.imageUrl, value.price);
        //console.log(object);
        this.loadingctrl.create({
            message: 'Adding. . .',
            duration: 5000
        }).then(function (loading) {
            loading.present();
            _this.itemserve.addformitem(object).subscribe(function () {
                _this.loadingctrl.dismiss();
                _this.navctrl.navigateForward('/home');
                _this.SellerForm.reset();
            });
        });
    };
    //imageSelected=null;
    SellerPage.prototype.PresentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            header: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.TakePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.TakePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(function (actionSheet) {
            actionSheet.present();
        });
    };
    SellerPage.prototype.TakePicture = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: source,
            destinationType: this.camera.DestinationType.FILE_URI
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageUrl = imageData;
        }).catch(function (err) {
            console.log(err);
        });
    };
    SellerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__(/*! ./seller.page.html */ "./src/app/seller/seller.page.html"),
            styles: [__webpack_require__(/*! ./seller.page.scss */ "./src/app/seller/seller.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_itemservice_service__WEBPACK_IMPORTED_MODULE_4__["ItemserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], SellerPage);
    return SellerPage;
}());



/***/ })

}]);
//# sourceMappingURL=seller-seller-module.js.map