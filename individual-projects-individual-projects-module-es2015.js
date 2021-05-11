(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["individual-projects-individual-projects-module"],{

/***/ "1Xak":
/*!***************************************************************************!*\
  !*** ./src/app/individual-projects/individual-projects-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: IndividualProjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualProjectsPageRoutingModule", function() { return IndividualProjectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _individual_projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./individual-projects.page */ "BdIf");




const routes = [
    {
        path: '',
        component: _individual_projects_page__WEBPACK_IMPORTED_MODULE_3__["IndividualProjectsPage"]
    }
];
let IndividualProjectsPageRoutingModule = class IndividualProjectsPageRoutingModule {
};
IndividualProjectsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndividualProjectsPageRoutingModule);



/***/ }),

/***/ "3E84":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/individual-projects/individual-projects.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>individual_projects</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n  <ion-col>\n    <ion-card id=\"cover\">\n      <ion-card-header id=\"card-title\">\n        Personal Projects\n      </ion-card-header>\n    </ion-card>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    <app-ng-tab-menu [tabsMenuData]=\"tabsMenuData\">\n\n    </app-ng-tab-menu>\n  </ion-col>\n  \n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "BdIf":
/*!*****************************************************************!*\
  !*** ./src/app/individual-projects/individual-projects.page.ts ***!
  \*****************************************************************/
/*! exports provided: IndividualProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualProjectsPage", function() { return IndividualProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_individual_projects_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./individual-projects.page.html */ "3E84");
/* harmony import */ var _individual_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./individual-projects.page.scss */ "cmbv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _class_unity_projects_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../class/unity-projects-data */ "YKyj");





let IndividualProjectsPage = class IndividualProjectsPage {
    constructor() {
        this.tabsMenuData = [];
    }
    ngOnInit() {
        _class_unity_projects_data__WEBPACK_IMPORTED_MODULE_4__["UnityProjectsData"].getDataList();
        this.initData();
    }
    initData() {
        this.tabsMenuData.push({
            tabsName: ["Game Development"],
            projectsContent: _class_unity_projects_data__WEBPACK_IMPORTED_MODULE_4__["UnityProjectsData"].dataList
        });
    }
    ngOnDestroy() {
        _class_unity_projects_data__WEBPACK_IMPORTED_MODULE_4__["UnityProjectsData"].removeDataList();
    }
};
IndividualProjectsPage.ctorParameters = () => [];
IndividualProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-individual-projects',
        template: _raw_loader_individual_projects_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_individual_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IndividualProjectsPage);



/***/ }),

/***/ "NxFY":
/*!**************************************************************************!*\
  !*** ./src/app/component/projects-content/projects-content.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectsContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsContentComponent", function() { return ProjectsContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projects_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projects-content.component.html */ "PVss");
/* harmony import */ var _projects_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-content.component.scss */ "R1Vj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProjectsContentComponent = class ProjectsContentComponent {
    constructor() {
        this.dataList = [];
    }
    ngOnInit() { }
};
ProjectsContentComponent.ctorParameters = () => [];
ProjectsContentComponent.propDecorators = {
    dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProjectsContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects-content',
        template: _raw_loader_projects_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectsContentComponent);



/***/ }),

/***/ "PVss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/projects-content/projects-content.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>\n  projects-content works!\n</p> -->\n<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let item of dataList\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        {{item.toolName}}\n      </mat-panel-title>\n      <mat-panel-description>\n        <!-- This is a summary of the content -->\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <!-- <p>This is the primary content of the panel.</p> -->\n    <div *ngFor=\"let subItem of item.projectsList\">\n      <app-project-detail\n      [projectName]=\"subItem.projectName\"\n      [details]=\"subItem.details\"\n      [links]=\"subItem.links\"\n      [screenShot]=\"subItem.screenShot\"\n      >\n      </app-project-detail>\n    </div>\n    \n  </mat-expansion-panel>\n</mat-accordion>");

/***/ }),

/***/ "R1Vj":
/*!****************************************************************************!*\
  !*** ./src/app/component/projects-content/projects-content.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "WT/8":
/*!**********************************************************************!*\
  !*** ./src/app/component/project-detail/project-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-detail.component.html */ "ev/g");
/* harmony import */ var _project_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-detail.component.scss */ "ZBeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProjectDetailComponent = class ProjectDetailComponent {
    constructor() {
        this.screenShot = [];
        this.links = [];
        this.details = [];
        this.projectName = "";
    }
    ngOnInit() { }
};
ProjectDetailComponent.ctorParameters = () => [];
ProjectDetailComponent.propDecorators = {
    screenShot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    links: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    projectName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProjectDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-detail',
        template: _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectDetailComponent);



/***/ }),

/***/ "Y8gy":
/*!*******************************************************************!*\
  !*** ./src/app/individual-projects/individual-projects.module.ts ***!
  \*******************************************************************/
/*! exports provided: IndividualProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualProjectsPageModule", function() { return IndividualProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _individual_projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individual-projects-routing.module */ "1Xak");
/* harmony import */ var _individual_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individual-projects.page */ "BdIf");
/* harmony import */ var _component_ng_tab_menu_ng_tab_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/ng-tab-menu/ng-tab-menu.component */ "zSqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _component_projects_content_projects_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/projects-content/projects-content.component */ "NxFY");
/* harmony import */ var _component_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/project-detail/project-detail.component */ "WT/8");
/* harmony import */ var _component_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/image-item/image-item.component */ "swkR");













let IndividualProjectsPageModule = class IndividualProjectsPageModule {
};
IndividualProjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _individual_projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndividualProjectsPageRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"]
        ],
        declarations: [_individual_projects_page__WEBPACK_IMPORTED_MODULE_6__["IndividualProjectsPage"], _component_ng_tab_menu_ng_tab_menu_component__WEBPACK_IMPORTED_MODULE_7__["NgTabMenuComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _component_projects_content_projects_content_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsContentComponent"],
            _component_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailComponent"], _component_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_12__["ImageItemComponent"]]
    })
], IndividualProjectsPageModule);



/***/ }),

/***/ "YKyj":
/*!**********************************************!*\
  !*** ./src/app/class/unity-projects-data.ts ***!
  \**********************************************/
/*! exports provided: UnityProjectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnityProjectsData", function() { return UnityProjectsData; });
/* harmony import */ var _project_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-detail */ "faZJ");

class UnityProjectsData {
    /**
     * getDataList
     */
    static getDataList() {
        //this.projectList.push(this.project01)
        this.dataList.push({
            toolName: this.toolName,
            projectsList: [
                {
                    projectName: this.project01.projectName,
                    details: this.project01.details,
                    links: this.project01.links,
                    screenShot: this.project01.screenShot
                },
                {
                    projectName: this.project02.projectName,
                    details: this.project02.details,
                    links: this.project02.links,
                    screenShot: this.project02.screenShot
                },
                {
                    projectName: this.project03.projectName,
                    details: this.project03.details,
                    links: this.project03.links,
                    screenShot: this.project03.screenShot
                },
                {
                    projectName: this.project04.projectName,
                    details: this.project04.details,
                    links: this.project04.links,
                    screenShot: this.project04.screenShot
                }
            ]
        });
    }
    static removeDataList() {
        this.dataList = [];
    }
}
UnityProjectsData.dataList = [];
UnityProjectsData.toolName = "Unity Engine";
//static projectList: ProjectDetail[] = [];
UnityProjectsData.project01 = new _project_detail__WEBPACK_IMPORTED_MODULE_0__["ProjectDetail"]("Game : Bluepoint Prototype", ["เป็นเกมที่สร้าง ในคลาสเรียนออนไลน์ ใน Coursera นำมาเพิ่มเติมและเผยแพร่ทาง Play Store",
    "โดยเป็นเกม 2D ให้ผู้เล่น เล่นเป็นจุดสีฟ้า และเคลื่อนที่หลบอุปสรรคต่างๆ เพื่อจะได้ออกจากเขาวงกฏ" +
        "โดยจะมีจุดสีแดงซึงเป็นฝ่ายตรงข้ามคอยขัดขวาง และยังมี Item ช่วยสำหรับหาทางออกอีกด้วย",
    "เกม Bluepoint Prototype เป็นเกมที่จัดทำเพื่อฝึกฝนพื้นฐานในการ สร้างเกมยันเผยแพร่ ไม่ได้จัดทำเพื่อการค้าใดๆ "
], [{
        link: "https://play.google.com/store/apps/details?id=com.PoppodStudio.BluePointPrototype",
        title: "Link เกมบน Playstore"
    }
], [
    {
        srcImg: "assets/img/Projects/Unity/01/gameplay.png",
        title: "ภาพตัวอย่างเกม",
        detail: "",
        ref: ""
    },
    {
        srcImg: "assets/img/Projects/Unity/01/gameplay2.png",
        title: "ภาพตัวอย่างเกม",
        detail: "",
        ref: ""
    }
]);
UnityProjectsData.project02 = new _project_detail__WEBPACK_IMPORTED_MODULE_0__["ProjectDetail"]("Game : Shape Game", ["เป็นเกมที่สร้าง เกมแรกเพื่อศึกษาเกี่ยวกับการสร้างและเผยแพร่ Play Store",
    "โดยเป็นเกม 2D ให้ผู้เล่น จิ้ม หรือกด รูปร่างตามเกมที่กำหนด"
], [{
        link: "https://play.google.com/store/apps/details?id=com.PoppodStudio.ShapeGame",
        title: "Link เกมบน Playstore"
    }
], [
    {
        srcImg: "assets/img/Projects/Unity/02/gameplay.png",
        title: "ภาพตัวอย่างเกม",
        detail: "",
        ref: ""
    },
    {
        srcImg: "assets/img/Projects/Unity/02/gameplay2.png",
        title: "ภาพตัวอย่างเกม",
        detail: "",
        ref: ""
    }
]);
UnityProjectsData.project03 = new _project_detail__WEBPACK_IMPORTED_MODULE_0__["ProjectDetail"]("Project : Self Programming Training", ["เป็นโปรเจคที่สร้างขึ้นเพื่อฝึกการเขียนโปรแกรม และ Design pattern",
    "โดยเป็นเกม 3D โดยตัวละครสามารถเดินแบบปกติและถือดาบและสามารถฟันได้ โดยหากฟันกล่องจะมี popup damage ขึ้นมา" +
        "เมื่อตีหลายครั้งการตีจะถูกเปลี่ยนเป็นท่าอื่น ที่มีดาเมจมากขึ้น"
], [{
        link: "https://github.com/poppod/Unity_Self_Programming_Training",
        title: "Link โปรเจคบน github และคำอธิบาย"
    },
    {
        link: "https://poppod.github.io/Unity_Self_Programming_Training_HTML5/",
        title: "Link เล่นเกม HTML5 "
    }
], [
    {
        srcImg: "assets/img/Projects/Unity/03/gameplay.png",
        title: "ภาพตัวอย่างเกม",
        detail: "",
        ref: ""
    },
    {
        srcImg: "assets/img/Projects/Unity/03/gameplay2.png",
        title: "ภาพตัวอย่าง Diagram",
        detail: "",
        ref: ""
    }
]);
UnityProjectsData.project04 = new _project_detail__WEBPACK_IMPORTED_MODULE_0__["ProjectDetail"]("Project : DesignPattern ObjectPool", ["เป็นโปรเจคที่สร้างขึ้นเพื่อฝึกการเขียนโปรแกรม ObjectPool Design pattern",
    "เมื่อคลิก จะสร้างกล่องขึ้นมาและหายไปตามเวลาที่กำหนดโดย ใช้ ObjectPool Design pattern"
], [{
        link: "https://github.com/poppod/Unity_DesignPattern_ObjectPool",
        title: "Link โปรเจคบน github "
    },
    {
        link: "https://poppod.github.io/Unity_DesignPattern_ObjectPool_HTML5/",
        title: "Link เล่นเกม HTML5 "
    }
], [
    {
        srcImg: "assets/img/Projects/Unity/04/gameplay.png",
        title: "ภาพตัวอย่างเกม",
        detail: "",
        ref: ""
    }
]);


/***/ }),

/***/ "ZBeB":
/*!************************************************************************!*\
  !*** ./src/app/component/project-detail/project-detail.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ajvy":
/*!******************************************************************!*\
  !*** ./src/app/component/ng-tab-menu/ng-tab-menu.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZy10YWItbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "cmbv":
/*!*******************************************************************!*\
  !*** ./src/app/individual-projects/individual-projects.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cover {\n  background-repeat: no-repeat;\n  height: 200px;\n  width: auto;\n  background-size: cover;\n  background-color: #205d8f;\n  display: block;\n  overflow: hidden;\n  background-position: center;\n  position: center;\n}\n\n#card-title {\n  position: relative;\n  top: 2%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  font-family: Helvetica;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluZGl2aWR1YWwtcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImluZGl2aWR1YWwtcHJvamVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvdmVye1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1ZDhmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICAjY2FyZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIlO1xyXG4gICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "d42p":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/ng-tab-menu/ng-tab-menu.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let item of tabsMenuData\">\n  <mat-tab-group dynamicHeight  >\n    <mat-tab label={{item.tabsName}} > \n      <app-projects-content [dataList] = \"item.projectsContent\"></app-projects-content> \n    </mat-tab>\n    \n  </mat-tab-group>\n</div>\n\n<!-- ทดลองก่อน จากนั้น แยก mat-tab ใน ngfor แทน -->\n<!-- content เป็น component -->");

/***/ }),

/***/ "ev/g":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project-detail/project-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel >\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      {{projectName}}\n    </mat-panel-title>\n    <mat-panel-description>\n      <!-- This is a subsummary of the content -->\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <div *ngFor=\"let detail of details\">\n    <!-- <p>This is the subprimary content of the panel.</p> -->\n    <p>{{detail}}</p>\n  </div>\n  \n  <div *ngFor=\"let link of links\">\n    <h4>{{link.title}}</h4>\n    <a [href]=\"link.link\" target=\"_blank\">{{link.link}}</a>\n  </div>\n  <h3>Screenshot</h3>\n  <ion-row>\n   <ion-col *ngFor=\"let item of screenShot\">\n    <app-image-item [srcImgUri]=\"item.srcImg\"\n    [title]=\"item.title\"\n    [detail]=\"item.detail\"\n    [refLink]=\"item.ref\">\n\n    </app-image-item>\n   </ion-col>\n  </ion-row>\n  \n</mat-expansion-panel>\n");

/***/ }),

/***/ "faZJ":
/*!*****************************************!*\
  !*** ./src/app/class/project-detail.ts ***!
  \*****************************************/
/*! exports provided: ProjectDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetail", function() { return ProjectDetail; });
class ProjectDetail {
    constructor(projectName, details = [], links = [], screenShot = []) {
        this.screenShot = [];
        this.links = [];
        this.details = [];
        this.projectName = "";
        this.projectName = projectName;
        this.details = details;
        this.links = links;
        this.screenShot = screenShot;
    }
}


/***/ }),

/***/ "zSqg":
/*!****************************************************************!*\
  !*** ./src/app/component/ng-tab-menu/ng-tab-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: NgTabMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTabMenuComponent", function() { return NgTabMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ng_tab_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ng-tab-menu.component.html */ "d42p");
/* harmony import */ var _ng_tab_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-tab-menu.component.scss */ "ajvy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NgTabMenuComponent = class NgTabMenuComponent {
    constructor() {
        this.tabsMenuData = [];
    }
    ngOnInit() {
    }
};
NgTabMenuComponent.ctorParameters = () => [];
NgTabMenuComponent.propDecorators = {
    tabsMenuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NgTabMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ng-tab-menu',
        template: _raw_loader_ng_tab_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ng_tab_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NgTabMenuComponent);



/***/ })

}]);
//# sourceMappingURL=individual-projects-individual-projects-module-es2015.js.map