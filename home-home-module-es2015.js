(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Poppod page\n    </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button routerLink=\"\">Home</ion-button>\n      <ion-button routerLink=\"/about\">About</ion-button>\n    </ion-buttons>\n    \n    \n  </ion-toolbar>\n  \n</ion-header> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Poppod Github Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-grid>\n    <ion-row>\n      \n      <ion-col >\n        <ion-card id=\"cover\" [ngStyle]=\"{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(assets/img/cover.JPG)'}\" >\n        <!-- id=\"card-title\" -->\n         <ion-card-header id=\"card-title\">\n          Welcome to Poppod Github Page\n         </ion-card-header>\n         <ion-card-content id=\"card-subtitle\">\n          Programer and Software developer\n         </ion-card-content>\n        </ion-card>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <mat-tab-group dynamicHeight  >\n          <mat-tab label=\"About me\" > \n            <ion-row >\n              <ion-col size=\"auto\" class=\"ion-align-items-center\" >\n                <div style=\"display: block;\">\n                  <ion-img style=\"max-width: 80%;margin-left: auto; margin-right: auto;\n                  height: auto;border: 8px solid #fff;\n                box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);;display: block;\" src=\"assets/img/about/face.jpg\"></ion-img>\n                </div>\n              </ion-col>\n              <ion-col> \n                <!-- <div>\n                  <h3 style=\"position: relative;\n                  margin: 20px 0 20px 0;\">Hello!</h3>\n                  <p> (Update 22/01/2021) </p>\n                </div> -->\n                <div style=\"position: relative;\n                margin: 20px 0 20px 0;\">\n                  <ion-list>\n                    <ion-item>\n                      <span></span>\n                      <ion-label><p>Name</p> Pramarn Moonprasarn </ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label><p>Age </p>{{age}} </ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label><p>Experience</p> {{exYear}} year </ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label><p> Country </p>Thailand </ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label><p> Location </p> Pathum Thani , Thanyaburi </ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label><p> e-mail </p>pop.podmenyou@gmail.com </ion-label>\n                    </ion-item>\n                    \n                  </ion-list>\n                  <ion-button  style=\"margin-top: 20px;\" >\n                    <ion-icon name=\"download\"></ion-icon>\n                    <span >&nbsp; <a style=\"color: #fff;\" href=\"assets/img/about/Resume.pdf\" download> Download Resume</a></span> \n                  </ion-button>\n                </div>\n                <ion-card  >\n                  <ion-card-header>\n                    <ion-card-title>\n                      See my skill and experiences.\n                    </ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-button color=\"light\" routerLink=\"/about\" style=\"text-transform:none!important;\" >\n                      Click to see details\n                    </ion-button>\n                  </ion-card-content>\n                   <!-- <div style=\"position: relative; display: block; font-size: 2.0em; text-overflow: clip;text-align: justify;\">\n                     <p>About me, See my skill and experiences.</p>\n                   </div> -->\n                   <!-- <div style=\"display: block; position: relative; \" >\n                    \n                   </div> -->\n                   \n                  </ion-card>\n              </ion-col>\n            </ion-row>\n          </mat-tab>\n          <mat-tab label=\"Projects\" > \n            <ion-row>\n              \n              <ion-col>\n                <ion-card id=\"twocol\" [ngStyle]=\"{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(assets/img/poppod.png)'}\" >\n                  \n                   <ion-card-header >\n                     \n                      \n                   </ion-card-header>\n                   <div style=\"display: block; position: relative; padding-left: 5%;\" >\n                    <h4>Bluepoint : Prototype</h4>\n                  </div>\n                  <div style=\"display: block; position: relative; padding-left: 5%;\" >\n                    <p>Game made by Unity Engine</p>\n                  </div>\n                   <div style=\"display: inline-block; position: relative; padding-left: 5%;\" >\n                    <ion-button   fill=\"outline\" size=\"small\" style=\"text-transform:none!important;\" >\n                      <a href=\"https://play.google.com/store/apps/details?id=com.PoppodStudio.BluePointPrototype\">Play store</a>\n                      \n                    </ion-button>\n                   </div>\n                  </ion-card>\n              </ion-col>\n              <ion-col style=\"display: block;\">\n                <div style=\"position: relative; display: inline-block; font-size: 2.0em; text-overflow: clip; margin-left: 20px;top: 20px;\">\n                  <p>See more other projects</p>\n                </div>\n                <div style=\"display: inline-block; position: relative;  margin-left: 20px; top:20px;\" >\n                 <ion-button  routerLink=\"/individual-projects\" style=\"text-transform:none!important;\" >\n                   Click to See more\n                 </ion-button>\n                </div>\n           </ion-col>\n            </ion-row>\n          </mat-tab>\n        </mat-tab-group>\n      </ion-col>\n      \n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n  <footer >\n    <div>\n      <p style=\"vertical-align: bottom; text-align: center;\">  by Pramarn Moonprasarn, Tools Ionic, Angular</p>\n    </div>\n    \n  </footer>\n</ion-content>\n\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#cover {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: cover;\n  background-color: #474747;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#twocol {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: auto;\n  background-color: #474747;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#twocol-detail {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: auto;\n  padding-left: 5%;\n  background-color: #ffffff0a;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#card-title {\n  position: relative;\n  top: 2%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  font-family: Helvetica;\n  display: block;\n}\n\n#card-subtitle {\n  font-size: 1em;\n  position: relative;\n  width: 100%;\n  color: #fff;\n  font-family: Helvetica;\n  display: block;\n}\n\n#img-temp {\n  display: block;\n  width: 30%;\n  background-position: left top;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuI2NvdmVye1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IGNlbnRlcjtcbn1cbiN0d29jb2x7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuIC8vLyBwYWRkaW5nLWxlZnQ6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IGNlbnRlcjtcbn1cbiN0d29jb2wtZGV0YWlse1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjBhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IGNlbnRlcjtcbn1cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNjYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIlO1xuICBmb250LXNpemU6IDMuMGVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2NhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIHRvcDogODAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2ltZy10ZW1we1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogIGxlZnQgdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map