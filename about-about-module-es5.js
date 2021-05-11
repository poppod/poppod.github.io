(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
    /***/
    "+wPt":
    /*!***********************************************!*\
      !*** ./src/app/about/about-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function wPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "kL6T");

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "2wcN":
    /*!****************************************************************!*\
      !*** ./src/app/component/skill-block/skill-block.component.ts ***!
      \****************************************************************/

    /*! exports provided: SkillBlockComponent */

    /***/
    function wcN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillBlockComponent", function () {
        return SkillBlockComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_skill_block_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./skill-block.component.html */
      "emCF");
      /* harmony import */


      var _skill_block_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./skill-block.component.scss */
      "eUUG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SkillBlockComponent = /*#__PURE__*/function () {
        function SkillBlockComponent() {
          _classCallCheck(this, SkillBlockComponent);

          this.icon = "desktop-outline"; //default

          this.title = "";
          this.detail = "";
        }

        _createClass(SkillBlockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillBlockComponent;
      }();

      SkillBlockComponent.ctorParameters = function () {
        return [];
      };

      SkillBlockComponent.propDecorators = {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        detail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SkillBlockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-block',
        template: _raw_loader_skill_block_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_block_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SkillBlockComponent);
      /***/
    },

    /***/
    "FQ1g":
    /*!***************************************!*\
      !*** ./src/app/about/about.module.ts ***!
      \***************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function FQ1g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../component/image-item/image-item.component */
      "swkR");
      /* harmony import */


      var _component_skill_block_skill_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../component/skill-block/skill-block.component */
      "2wcN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about-routing.module */
      "+wPt");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./about.page */
      "kL6T");
      /* harmony import */


      var _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../component/timeline/timeline.component */
      "atZg");

      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_8__["AboutPage"], _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"], _component_skill_block_skill_block_component__WEBPACK_IMPORTED_MODULE_2__["SkillBlockComponent"], _component_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_1__["ImageItemComponent"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "atZg":
    /*!**********************************************************!*\
      !*** ./src/app/component/timeline/timeline.component.ts ***!
      \**********************************************************/

    /*! exports provided: TimelineComponent */

    /***/
    function atZg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
        return TimelineComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_timeline_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./timeline.component.html */
      "fZS9");
      /* harmony import */


      var _timeline_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./timeline.component.scss */
      "fga+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TimelineComponent = /*#__PURE__*/function () {
        function TimelineComponent() {
          _classCallCheck(this, TimelineComponent);

          this.icon = "ribbon-outline";
          this.headerTimeline = "test";
          this.dataList = []; //[]=[];
        } //test


        _createClass(TimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addHeader",
          value: function addHeader(icon, header) {
            this.icon = icon;
            this.headerTimeline = header;
          }
        }, {
          key: "addDataTimeline",
          value: function addDataTimeline(titleHeader, year, describe) {
            this.dataList.push({
              titleHeader: titleHeader,
              year: year,
              describe: describe
            });
          }
        }]);

        return TimelineComponent;
      }();

      TimelineComponent.ctorParameters = function () {
        return [];
      };

      TimelineComponent.propDecorators = {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        headerTimeline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TimelineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-timeline',
        template: _raw_loader_timeline_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_timeline_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TimelineComponent);
      /***/
    },

    /***/
    "eUUG":
    /*!******************************************************************!*\
      !*** ./src/app/component/skill-block/skill-block.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function eUUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#block {\n  padding: 48px 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  display: flex;\n  position: relative;\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxza2lsbC1ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJza2lsbC1ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNibG9ja3tcclxuICAgIHBhZGRpbmc6IDQ4cHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "emCF":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/skill-block/skill-block.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function emCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <p>\n  skill-block works!\n</p> -->\n<ion-card id=\"block\">\n  <ion-card-header>\n    <ion-icon [name]=\"icon\"  style=\"font-size: 80px;\"></ion-icon>\n  </ion-card-header>\n<ion-card-content>\n  <ion-card-title style=\"font-size: 20px;\"> {{title}}</ion-card-title>\n  <ion-card-subtitle>\n    {{detail}}\n  </ion-card-subtitle>\n</ion-card-content>\n \n\n</ion-card>";
      /***/
    },

    /***/
    "fZS9":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/timeline/timeline.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fZS9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n    <!-- generate by code -->\n    \n\n    <ion-title><ion-icon [name]=\"icon\"></ion-icon>  {{headerTimeline}}</ion-title>\n    <ion-col *ngFor=\"let data of dataList\" size=\"auto\" class=\"ion-align-items-center\"\n     style=\"padding-left: 15px;\">\n      \n        <ion-card style=\"padding-left: 15px;\">\n          <ion-card-header>\n            <ion-card-title>\n              {{data.titleHeader}}\n            </ion-card-title>\n            <ion-card-subtitle>\n              {{data.year}}\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            {{data.describe}}\n          </ion-card-content>\n        </ion-card>\n        \n      \n    </ion-col>\n  \n    <!--  -->\n  \n";
      /***/
    },

    /***/
    "fga+":
    /*!************************************************************!*\
      !*** ./src/app/component/timeline/timeline.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function fga(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "kL6T":
    /*!*************************************!*\
      !*** ./src/app/about/about.page.ts ***!
      \*************************************/

    /*! exports provided: AboutPage */

    /***/
    function kL6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.page.html */
      "mhsJ");
      /* harmony import */


      var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.page.scss */
      "vbXv");
      /* harmony import */


      var _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../component/timeline/timeline.component */
      "atZg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { TimelineComponent } from '../timeline/timeline.component';


      var AboutPage = /*#__PURE__*/function () {
        function AboutPage() {
          _classCallCheck(this, AboutPage);

          this.eduTimeline = new _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]();
          this.experienceTimeline = new _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]();
          this.skill = [];
          this.other = [];
          this.showOther = false;
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            this.age = this.ageFromDateOfBirthday("1996-06-18");
            this.exYear = this.experienceYear();
            this.addEduTimeline();
            this.addExperienceTimeline();
            this.addSkill();
            this.addOther();
          }
        }, {
          key: "addEduTimeline",
          value: function addEduTimeline() {
            this.eduTimeline.addHeader("school-outline", "EDUCATION");
            this.eduTimeline.addDataTimeline("B.Eng. Computer Engineering - Rajamangala University of Technology Thanyaburi", "2015 - 2018", " the Graduate project is A system ‌for‌ ‌quality ‌checking ‌of ‌printed ‌characters ‌on product‌ " + "using python and Image processing theory Implement hardware with Raspbery pi 3, GPA 3.51");
            this.eduTimeline.addDataTimeline("High school - NongLuang Suksa School", "2011 - 2014", " Mathematics-Science Program , GPA 3.XX ");
          }
        }, {
          key: "addExperienceTimeline",
          value: function addExperienceTimeline() {
            this.experienceTimeline.addHeader("briefcase-outline", "EXPERIENCE");
            this.experienceTimeline.addDataTimeline("NCR -A-MED, NSTDA Thailand", "Jan 2020 - Present", "Non Co-researcher Build and make application for LD kid using Unity C#");
            this.experienceTimeline.addDataTimeline("Programmer - Softpro company", "Jul 2019 - Oct 2019", "ERP software company using VB.Net and other project such as Arduino(IOT) with C, Python in data train project");
            this.experienceTimeline.addDataTimeline("Co-operative training - Yamagata University Yonezawa campus, Japan", "Jun 2018 - Sep 2018", "Training and Research about Network Security");
          }
        }, {
          key: "addSkill",
          value: function addSkill() {
            this.skill.push({
              icon: "desktop-outline",
              title: "SOFTWARE DEVELOPMENT",
              detail: "Development WebApplication, Mobile-WebApplication, Desktop-Application Using Ionic framework" + " and Other such as Python, .Net, Java (Android)"
            });
            this.skill.push({
              icon: "game-controller-outline",
              title: "GAME DEVELOPMENT",
              detail: "Development Game using Unity Engine"
            });
            this.skill.push({
              icon: "hardware-chip-outline",
              title: "BASIC EMBEDDED SYSTEM",
              detail: "Programming and Development Embedded system such as IOT, Raspberry pi, Arduino "
            });
          }
        }, {
          key: "addOther",
          value: function addOther() {
            this.other.push({
              srcImg: "./assets/img/cert/cer6.png",
              title: "C# Programming for Unity Game Development Specialization",
              detail: "C# for Unity from University of Colorado System",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/GUTAKCE7JNXE"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer2.png",
              title: "Unity Certified 3D Artist Specialization",
              detail: "3D Artist Specialization",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/SLVP3VG7RSHR"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer4.png",
              title: "Unity Certified Programmer Exam Preparation Specialization",
              detail: "Programmer Exam Preparation",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/EGZURHJX7U87"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer3.png",
              title: "Graphic Design Elements for Non-Designers Specialization",
              detail: "Graphic Design for Non-Designers Specialization",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/QL7XFJC895L5"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer11.png",
              title: "Cloud Engineering with Google Cloud Specialization",
              detail: "Cloud Engineering with Google Cloud Specialization",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/WUG54RDW78K5"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer12.png",
              title: "Architecting with Google Compute Engine Specialization",
              detail: "Architecting with Google Compute Engine",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/CBQPTKTZAJGM"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer13.png",
              title: "Cloud Architecture with Google Cloud Specialization",
              detail: "Cloud Architecture with Google Cloud",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/SK6NPU79DGBB"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer14.png",
              title: "Programming with Google Go Specialization",
              detail: "Programming with Google Go from University of California, Irvine",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/97BC73ZPN9MC"
            });
            this.other.push({
              srcImg: "./assets/img/cert/cer17.png",
              title: "Networking in Google Cloud Specialization",
              detail: "Networking in Google Cloud",
              ref: "https://www.coursera.org/account/accomplishments/specialization/certificate/5NF26P2KSUPQ"
            });
          }
        }, {
          key: "ageFromDateOfBirthday",
          value: function ageFromDateOfBirthday(dateOfBirth) {
            var today = new Date();
            var birthDate = new Date(dateOfBirth);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
              age--;
            }

            return age;
          }
        }, {
          key: "experienceYear",
          value: function experienceYear() {
            var today = new Date();
            return today.getFullYear() - 2020;
          }
        }, {
          key: "onclickShowOther",
          value: function onclickShowOther() {
            this.showOther = !this.showOther;
          }
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutPage);
      /***/
    },

    /***/
    "mhsJ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function mhsJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>about</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-card id=\"cover\" [ngStyle]=\"{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 5)),url(assets/img/about/cover.jpg)'}\" >\n        <!-- id=\"card-title\" -->\n        <div style=\"position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\">\n          <span style=\"text-align: center;font-size: 5.0em ;font-family: Helvetica;\">About me</span>\n        </div>\n       \n        </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col size=\"auto\" class=\"ion-align-items-center\" >\n      <div style=\"display: block;\">\n        <ion-img style=\"max-width: 80%;margin-left: auto; margin-right: auto;\n        height: auto;border: 8px solid #fff;\n      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);;display: block;\" src=\"assets/img/about/face.jpg\"></ion-img>\n      </div>\n    </ion-col>\n    <ion-col> \n      <!-- <div>\n        <h3 style=\"position: relative;\n        margin: 20px 0 20px 0;\">Hello!</h3>\n        <p> (Update 22/01/2021) </p>\n      </div> -->\n      <div style=\"position: relative;\n      margin: 20px 0 20px 0;\">\n        <ion-list>\n          <ion-item>\n            <span></span>\n            <ion-label><p>Name</p> Pramarn Moonprasarn </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label><p>Age </p>{{age}} </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label><p>Experience</p> {{exYear}} year </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label><p> Country </p>Thailand </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label><p> Location </p> Pathum Thani , Thanyaburi </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label><p> e-mail </p>pop.podmenyou@gmail.com </ion-label>\n          </ion-item>\n          \n        </ion-list>\n        <ion-button  style=\"margin-top: 20px;\" >\n          <ion-icon name=\"download\"></ion-icon>\n          <span >&nbsp; <a style=\"color: #fff;\" href=\"assets/img/about/Resume.pdf\" download> Download Resume</a></span>\n        </ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row >\n\n  </ion-row> -->\n  <ion-row style=\"padding-top: 50px;\">\n    <ion-col id=\"timeline\" >\n      <app-timeline [icon]=\"eduTimeline.icon\" [headerTimeline]=\"eduTimeline.headerTimeline\" \n      [dataList]=\"eduTimeline.dataList\"></app-timeline>\n      \n    </ion-col>\n    <ion-col id=\"timeline\">\n      <app-timeline [icon]=\"experienceTimeline.icon\"\n      [headerTimeline]=\"experienceTimeline.headerTimeline\"\n      [dataList]=\"experienceTimeline.dataList\"></app-timeline>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n    <ion-title style=\"text-align: center; position: relative; font-size: 30px; margin-bottom: 30px;\">\n     <ion-icon name=\"rocket\"></ion-icon> MY SKILL</ion-title>\n     \n  </ion-row>\n  <ion-row style=\"display: flex;\">\n        <ion-col *ngFor=\"let mSkill of skill\"  >\n          <app-skill-block \n          [icon]=\"mSkill.icon\"\n          [title]=\"mSkill.title\"\n          [detail]=\"mSkill.detail\"\n          ></app-skill-block>\n        </ion-col>\n       \n  </ion-row>\n  <ion-row>\n    \n      <ion-title style=\"text-align: center; position: relative; font-size: 30px; margin-bottom: 30px;\n    margin-top: 30px;\">\n     <ion-icon name=\"ribbon\"></ion-icon> Other</ion-title>\n  \n    \n     \n  </ion-row>\n  \n  <ion-row  >\n      <ion-col *ngFor=\"let item of other\" style=\"display:inline-block; width: 50%;\"  >\n        <app-image-item \n        [srcImgUri]=\"item.srcImg\"\n        [title]=\"item.title\"\n        [detail]=\"item.detail\"\n        [refLink]=\"item.ref\"\n        ></app-image-item>\n      </ion-col>\n      \n    \n  </ion-row>\n</ion-grid>\n<footer >\n  <div>\n    <p style=\"vertical-align: bottom; text-align: center;\">  by Pramarn Moonprasarn, Tools Ionic, Angular</p>\n  </div>\n  \n</footer>\n</ion-content>\n";
      /***/
    },

    /***/
    "vbXv":
    /*!***************************************!*\
      !*** ./src/app/about/about.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function vbXv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#cover {\n  background-repeat: no-repeat;\n  height: 400px;\n  width: auto;\n  background-size: cover;\n  background-color: #474747;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#timeline {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY292ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4jdGltZWxpbmV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=about-about-module-es5.js.map