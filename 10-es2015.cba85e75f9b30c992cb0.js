(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FQ1g:function(e,i,t){"use strict";t.r(i),t.d(i,"AboutPageModule",(function(){return f}));var n=t("ofXK"),o=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),c=t("fXoL");function s(e,i){if(1&e&&(c.Kb(0,"ion-col",2),c.Kb(1,"ion-card",3),c.Kb(2,"ion-card-header"),c.Kb(3,"ion-card-title"),c.bc(4),c.Jb(),c.Kb(5,"ion-card-subtitle"),c.bc(6),c.Jb(),c.Jb(),c.Kb(7,"ion-card-content"),c.bc(8),c.Jb(),c.Jb(),c.Jb()),2&e){const e=i.$implicit;c.xb(4),c.dc(" ",e.titleHeader," "),c.xb(2),c.dc(" ",e.year," "),c.xb(2),c.dc(" ",e.describe," ")}}let l=(()=>{class e{constructor(){this.icon="ribbon-outline",this.headerTimeline="test",this.dataList=[]}ngOnInit(){}addHeader(e,i){this.icon=e,this.headerTimeline=i}addDataTimeline(e,i,t){this.dataList.push({titleHeader:e,year:i,describe:t})}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-timeline"]],inputs:{icon:"icon",headerTimeline:"headerTimeline",dataList:"dataList"},decls:4,vars:3,consts:[[3,"name"],["size","auto","class","ion-align-items-center","style","padding-left: 15px;",4,"ngFor","ngForOf"],["size","auto",1,"ion-align-items-center",2,"padding-left","15px"],[2,"padding-left","15px"]],template:function(e,i){1&e&&(c.Kb(0,"ion-title"),c.Ib(1,"ion-icon",0),c.bc(2),c.Jb(),c.ac(3,s,9,3,"ion-col",1)),2&e&&(c.xb(1),c.Vb("name",i.icon),c.xb(1),c.dc(" ",i.headerTimeline,""),c.xb(1),c.Vb("ngForOf",i.dataList))},directives:[a.v,a.l,n.h,a.h,a.c,a.e,a.g,a.f,a.d],styles:[""]}),e})(),b=(()=>{class e{constructor(){this.icon="desktop-outline",this.title="",this.detail=""}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-skill-block"]],inputs:{icon:"icon",title:"title",detail:"detail"},decls:8,vars:3,consts:[["id","block"],[2,"font-size","80px",3,"name"],[2,"font-size","20px"]],template:function(e,i){1&e&&(c.Kb(0,"ion-card",0),c.Kb(1,"ion-card-header"),c.Ib(2,"ion-icon",1),c.Jb(),c.Kb(3,"ion-card-content"),c.Kb(4,"ion-card-title",2),c.bc(5),c.Jb(),c.Kb(6,"ion-card-subtitle"),c.bc(7),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(2),c.Vb("name",i.icon),c.xb(3),c.dc(" ",i.title,""),c.xb(2),c.dc(" ",i.detail," "))},directives:[a.c,a.e,a.l,a.d,a.g,a.f],styles:["#block[_ngcontent-%COMP%]{padding:48px 20px;margin-bottom:20px;text-align:center;display:flex;position:relative;height:inherit}"]}),e})(),d=(()=>{class e{constructor(){this.srcImgUri="",this.title="",this.detail="",this.refLink=""}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-image-item"]],inputs:{srcImgUri:"srcImgUri",title:"title",detail:"detail",refLink:"refLink"},decls:11,vars:5,consts:[[2,"padding","48px 20px","margin-bottom","20px","display","block","position","relative"],[2,"display","flex","flex-direction","column"],[2,"max-height","20%","position","relative",3,"src"],["target","_blank",3,"href"]],template:function(e,i){1&e&&(c.Kb(0,"ion-card",0),c.Kb(1,"div",1),c.Ib(2,"img",2),c.Jb(),c.Kb(3,"ion-card-header"),c.Kb(4,"ion-card-title"),c.bc(5),c.Jb(),c.Jb(),c.Kb(6,"ion-card-content"),c.Kb(7,"ion-card-subtitle"),c.bc(8),c.Jb(),c.Kb(9,"a",3),c.bc(10),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(2),c.Vb("src",i.srcImgUri,c.Yb),c.xb(3),c.cc(i.title),c.xb(3),c.dc(" ",i.detail," "),c.xb(1),c.Vb("href",i.refLink,c.Yb),c.xb(1),c.cc(i.refLink))},directives:[a.c,a.e,a.g,a.d,a.f],styles:[""]}),e})();function p(e,i){if(1&e&&(c.Kb(0,"ion-col"),c.Ib(1,"app-skill-block",21),c.Jb()),2&e){const e=i.$implicit;c.xb(1),c.Vb("icon",e.icon)("title",e.title)("detail",e.detail)}}function m(e,i){if(1&e&&(c.Kb(0,"ion-col",22),c.Ib(1,"app-image-item",23),c.Jb()),2&e){const e=i.$implicit;c.xb(1),c.Vb("srcImgUri",e.srcImg)("title",e.title)("detail",e.detail)("refLink",e.ref)}}const h=function(){return{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 5)),url(assets/img/about/cover.jpg)"}},g=[{path:"",component:(()=>{class e{constructor(){this.eduTimeline=new l,this.experienceTimeline=new l,this.skill=[],this.other=[],this.showOther=!1}ngOnInit(){this.age=this.ageFromDateOfBirthday("1996-06-18"),this.exYear=this.experienceYear(),this.addEduTimeline(),this.addExperienceTimeline(),this.addSkill(),this.addOther()}addEduTimeline(){this.eduTimeline.addHeader("school-outline","EDUCATION"),this.eduTimeline.addDataTimeline("B.Eng. Computer Engineering - Rajamangala University of Technology Thanyaburi","2015 - 2018"," the Graduate project is A system \u200cfor\u200c \u200cquality \u200cchecking \u200cof \u200cprinted \u200ccharacters \u200con product\u200c using python and Image processing theory Implement hardware with Raspbery pi 3, GPA 3.51"),this.eduTimeline.addDataTimeline("High school - NongLuang Suksa School","2011 - 2014"," Mathematics-Science Program , GPA 3.XX ")}addExperienceTimeline(){this.experienceTimeline.addHeader("briefcase-outline","EXPERIENCE"),this.experienceTimeline.addDataTimeline("NCR -A-MED, NSTDA Thailand","Jan 2020 - Present","Non Co-researcher Build and make application for LD kid using Unity C#"),this.experienceTimeline.addDataTimeline("Programmer - Softpro company","Jul 2019 - Oct 2019","ERP software company using VB.Net and other project such as Arduino(IOT) with C, Python in data train project"),this.experienceTimeline.addDataTimeline("Co-operative training - Yamagata University Yonezawa campus, Japan","Jun 2018 - Sep 2018","Training and Research about Network Security")}addSkill(){this.skill.push({icon:"desktop-outline",title:"SOFTWARE DEVELOPMENT",detail:"Development WebApplication, Mobile-WebApplication, Desktop-Application Using Ionic framework and Other such as Python, .Net, Java (Android)"}),this.skill.push({icon:"game-controller-outline",title:"GAME DEVELOPMENT",detail:"Development Game using Unity Engine"}),this.skill.push({icon:"hardware-chip-outline",title:"BASIC EMBEDDED SYSTEM",detail:"Programming and Development Embedded system such as IOT, Raspberry pi, Arduino "})}addOther(){this.other.push({srcImg:"./assets/img/cert/cer6.png",title:"C# Programming for Unity Game Development Specialization",detail:"C# for Unity from University of Colorado System",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/GUTAKCE7JNXE"}),this.other.push({srcImg:"./assets/img/cert/cer2.png",title:"Unity Certified 3D Artist Specialization",detail:"3D Artist Specialization",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/SLVP3VG7RSHR"}),this.other.push({srcImg:"./assets/img/cert/cer4.png",title:"Unity Certified Programmer Exam Preparation Specialization",detail:"Programmer Exam Preparation",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/EGZURHJX7U87"}),this.other.push({srcImg:"./assets/img/cert/cer3.png",title:"Graphic Design Elements for Non-Designers Specialization",detail:"Graphic Design for Non-Designers Specialization",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/QL7XFJC895L5"}),this.other.push({srcImg:"./assets/img/cert/cer11.png",title:"Cloud Engineering with Google Cloud Specialization",detail:"Cloud Engineering with Google Cloud Specialization",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/WUG54RDW78K5"}),this.other.push({srcImg:"./assets/img/cert/cer12.png",title:"Architecting with Google Compute Engine Specialization",detail:"Architecting with Google Compute Engine",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/CBQPTKTZAJGM"}),this.other.push({srcImg:"./assets/img/cert/cer13.png",title:"Cloud Architecture with Google Cloud Specialization",detail:"Cloud Architecture with Google Cloud",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/SK6NPU79DGBB"}),this.other.push({srcImg:"./assets/img/cert/cer14.png",title:"Programming with Google Go Specialization",detail:"Programming with Google Go from University of California, Irvine",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/97BC73ZPN9MC"}),this.other.push({srcImg:"./assets/img/cert/cer17.png",title:"Networking in Google Cloud Specialization",detail:"Networking in Google Cloud",ref:"https://www.coursera.org/account/accomplishments/specialization/certificate/5NF26P2KSUPQ"})}ageFromDateOfBirthday(e){const i=new Date,t=new Date(e);let n=i.getFullYear()-t.getFullYear();const o=i.getMonth()-t.getMonth();return(o<0||0===o&&i.getDate()<t.getDate())&&n--,n}experienceYear(){return(new Date).getFullYear()-2020}onclickShowOther(){this.showOther=!this.showOther}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-about"]],decls:76,vars:13,consts:[[3,"fullscreen"],["id","cover",3,"ngStyle"],[2,"position","absolute","top","50%","left","50%","transform","translate(-50%, -50%)"],[2,"text-align","center","font-size","5.0em","font-family","Helvetica"],["size","auto",1,"ion-align-items-center"],[2,"display","block"],["src","assets/img/about/face.jpg",2,"max-width","80%","margin-left","auto","margin-right","auto","height","auto","border","8px solid #fff","box-shadow","0px 0px 30px rgba(0, 0, 0, 0.2)",";display","block"],[2,"position","relative","margin","20px 0 20px 0"],["disabled","true",2,"margin-top","20px"],["name","download"],[2,"padding-top","50px"],["id","timeline"],[3,"icon","headerTimeline","dataList"],[2,"text-align","center","position","relative","font-size","30px","margin-bottom","30px"],["name","rocket"],[2,"display","flex"],[4,"ngFor","ngForOf"],[2,"text-align","center","position","relative","font-size","30px","margin-bottom","30px","margin-top","30px"],["name","ribbon"],["style","display: block; width: auto;",4,"ngFor","ngForOf"],[2,"vertical-align","bottom","text-align","center"],[3,"icon","title","detail"],[2,"display","block","width","auto"],[3,"srcImgUri","title","detail","refLink"]],template:function(e,i){1&e&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title"),c.bc(3,"about"),c.Jb(),c.Jb(),c.Jb(),c.Kb(4,"ion-content",0),c.Kb(5,"ion-grid"),c.Kb(6,"ion-row"),c.Kb(7,"ion-col"),c.Kb(8,"ion-card",1),c.Kb(9,"div",2),c.Kb(10,"span",3),c.bc(11,"About me"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(12,"ion-row"),c.Kb(13,"ion-col",4),c.Kb(14,"div",5),c.Ib(15,"ion-img",6),c.Jb(),c.Jb(),c.Kb(16,"ion-col"),c.Kb(17,"div",7),c.Kb(18,"ion-list"),c.Kb(19,"ion-item"),c.Ib(20,"span"),c.Kb(21,"ion-label"),c.Kb(22,"p"),c.bc(23,"Name"),c.Jb(),c.bc(24," Pramarn Moonprasarn "),c.Jb(),c.Jb(),c.Kb(25,"ion-item"),c.Kb(26,"ion-label"),c.Kb(27,"p"),c.bc(28,"Age "),c.Jb(),c.bc(29),c.Jb(),c.Jb(),c.Kb(30,"ion-item"),c.Kb(31,"ion-label"),c.Kb(32,"p"),c.bc(33,"Experience"),c.Jb(),c.bc(34),c.Jb(),c.Jb(),c.Kb(35,"ion-item"),c.Kb(36,"ion-label"),c.Kb(37,"p"),c.bc(38," Country "),c.Jb(),c.bc(39,"Thailand "),c.Jb(),c.Jb(),c.Kb(40,"ion-item"),c.Kb(41,"ion-label"),c.Kb(42,"p"),c.bc(43," Location "),c.Jb(),c.bc(44," Pathum Thani , Thanyaburi "),c.Jb(),c.Jb(),c.Kb(45,"ion-item"),c.Kb(46,"ion-label"),c.Kb(47,"p"),c.bc(48," e-mail "),c.Jb(),c.bc(49,"pop.podmenyou@gmail.com "),c.Jb(),c.Jb(),c.Jb(),c.Kb(50,"ion-button",8),c.Ib(51,"ion-icon",9),c.Kb(52,"span"),c.bc(53,"\xa0"),c.Jb(),c.bc(54," Download Resume "),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(55,"ion-row",10),c.Kb(56,"ion-col",11),c.Ib(57,"app-timeline",12),c.Jb(),c.Kb(58,"ion-col",11),c.Ib(59,"app-timeline",12),c.Jb(),c.Jb(),c.Kb(60,"ion-row"),c.Kb(61,"ion-title",13),c.Ib(62,"ion-icon",14),c.bc(63," MY SKILL"),c.Jb(),c.Jb(),c.Kb(64,"ion-row",15),c.ac(65,p,2,3,"ion-col",16),c.Jb(),c.Kb(66,"ion-row"),c.Kb(67,"ion-title",17),c.Ib(68,"ion-icon",18),c.bc(69," Other"),c.Jb(),c.Jb(),c.Kb(70,"ion-row",15),c.ac(71,m,2,4,"ion-col",19),c.Jb(),c.Jb(),c.Kb(72,"footer"),c.Kb(73,"div"),c.Kb(74,"p",20),c.bc(75," by Pramarn Moonprasarn, Tools Ionic, Angular"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(4),c.Vb("fullscreen",!0),c.xb(4),c.Vb("ngStyle",c.Wb(12,h)),c.xb(21),c.dc("",i.age," "),c.xb(5),c.dc(" ",i.exYear," year "),c.xb(23),c.Vb("icon",i.eduTimeline.icon)("headerTimeline",i.eduTimeline.headerTimeline)("dataList",i.eduTimeline.dataList),c.xb(2),c.Vb("icon",i.experienceTimeline.icon)("headerTimeline",i.experienceTimeline.headerTimeline)("dataList",i.experienceTimeline.dataList),c.xb(6),c.Vb("ngForOf",i.skill),c.xb(6),c.Vb("ngForOf",i.other))},directives:[a.k,a.w,a.v,a.i,a.j,a.u,a.h,a.c,n.i,a.m,a.p,a.n,a.o,a.b,a.l,l,n.h,b,d],styles:["#cover[_ngcontent-%COMP%]{background-repeat:no-repeat;height:400px;width:auto;background-size:cover;background-color:#474747;display:block;overflow:hidden;background-position:50%;position:center}#timeline[_ngcontent-%COMP%]{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}"]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(i){return new(i||e)},imports:[[r.i.forChild(g)],r.i]}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(i){return new(i||e)},imports:[[n.b,o.a,a.x,u]]}),e})()}}]);