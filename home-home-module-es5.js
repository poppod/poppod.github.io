(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Poppod page\n    </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button routerLink=\"\">Home</ion-button>\n      <ion-button routerLink=\"/about\">About</ion-button>\n    </ion-buttons>\n    \n    \n  </ion-toolbar>\n  \n</ion-header> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Poppod page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-grid>\n    <ion-row>\n      \n      <ion-col >\n        <ion-card id=\"cover\" [ngStyle]=\"{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(assets/img/cover.JPG)'}\" >\n        <!-- id=\"card-title\" -->\n         <ion-card-header id=\"card-title\">\n          Welcome to Poppod page\n         </ion-card-header>\n         <ion-card-content id=\"card-subtitle\">\n          Programer and Software developer\n         </ion-card-content>\n        </ion-card>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"display: block;\">\n           <div style=\"position: relative; display: inline-block; font-size: 2.0em; text-overflow: clip; margin-left: 20px;\">\n             <p>My hobbies are learn everything to need and make them to learn more.</p>\n           </div>\n           <div style=\"display: inline-block; position: relative;  margin-left: 20px;\" >\n            <ion-button disabled=\"true\" routerLink=\"/about\" style=\"text-transform:none!important;\" >\n              Click to see details\n            </ion-button>\n           </div>\n      </ion-col>\n      <ion-col>\n        <ion-card id=\"twocol\" [ngStyle]=\"{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(assets/img/poppod.png)'}\" >\n          <!-- id=\"card-title\" -->\n           <ion-card-header >\n             \n              \n           </ion-card-header>\n           <div style=\"display: block; position: relative; padding-left: 5%;\" >\n            <h4>Poppod studio</h4>\n          </div>\n          <div style=\"display: block; position: relative; padding-left: 5%;\" >\n            <p>Each in my hobbies is make game by Unity Engine</p>\n          </div>\n           <div style=\"display: inline-block; position: relative; padding-left: 5%;\" >\n            <ion-button disabled=\"true\" routerLink=\"/\" fill=\"outline\" size=\"small\" style=\"text-transform:none!important;\" >\n              <a href=\"www.facebook.com/Poppod-Studio-106535881302356/\">Faccbook page</a>\n              \n            </ion-button>\n           </div>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card  >\n          <ion-card-header>\n            <ion-card-title>\n              About me, See my skill and experiences.\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button color=\"light\" routerLink=\"/about\" style=\"text-transform:none!important;\" >\n              Click to see details\n            </ion-button>\n          </ion-card-content>\n           <!-- <div style=\"position: relative; display: block; font-size: 2.0em; text-overflow: clip;text-align: justify;\">\n             <p>About me, See my skill and experiences.</p>\n           </div> -->\n           <!-- <div style=\"display: block; position: relative; \" >\n            \n           </div> -->\n           \n          </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n  <footer >\n    <div>\n      <p style=\"vertical-align: bottom; text-align: center;\">  by Pramarn Moonprasarn, Tools Ionic, Angular</p>\n    </div>\n    \n  </footer>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#cover {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: cover;\n  background-color: #474747;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#twocol {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: auto;\n  background-color: #474747;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#twocol-detail {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: auto;\n  padding-left: 5%;\n  background-color: #ffffff0a;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#card-title {\n  position: relative;\n  top: 2%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  font-family: Helvetica;\n  display: block;\n}\n\n#card-subtitle {\n  font-size: 1em;\n  position: relative;\n  width: 100%;\n  color: #fff;\n  font-family: Helvetica;\n  display: block;\n}\n\n#img-temp {\n  display: block;\n  width: 30%;\n  background-position: left top;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4jY292ZXJ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogY2VudGVyO1xufVxuI3R3b2NvbHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gLy8vIHBhZGRpbmctbGVmdDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogY2VudGVyO1xufVxuI3R3b2NvbC1kZXRhaWx7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMGE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogY2VudGVyO1xufVxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2NhcmQtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMy4wZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4wZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gdG9wOiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jaW1nLXRlbXB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgbGVmdCB0b3A7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomePage = function HomePage() {
        _classCallCheck(this, HomePage);
      };

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map