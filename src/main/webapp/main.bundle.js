webpackJsonp([1,4],{

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 126;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(134);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export Job */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(elm, http) {
        this.http = http;
        //private successList:Job[]=[new Job(1,"SleepBuilder"),new Job(2, "Monitor")];
        this.AllJobsURL = [];
        this.AllBuildsURL = [];
        this.finalURL = "api/json?pretty=true";
        this.successList = [];
        this.failureList = [];
        this.brokenList = [];
        this.urlJenkins = "http://localhost:8080/jenkins/";
        this.title = 'Jenkins Infraestructure Monitor';
        this.title2 = 'Success list';
        this.title3 = 'Failure list';
        this.title4 = 'Broken list';
        this.urlJenkins = elm.nativeElement.getAttribute("urlJenkins");
    }
    //SI SE DESCOMENTA TODO Y SE CAMBIA EL ATRIBUTO DEL BOTON FUNCIONA PERO NO AL PRIMER CLICK
    /*  getAllAux(JobsURL: string){
        this.getAllTheJobs(JobsURL);
        for (var i = 0; i < this.AllJobsURL.length; i ++){
        this.getBuilds(this.AllJobsURL[i] + this.finalURL);
        }
        for (var j = 0; j < this.AllBuildsURL.length; j++){
        this.getJob(this.AllBuildsURL[j] + this.finalURL);
        }
      }
  
      getAllTheJobs(JobsURL: string){
  
        this.http.get(JobsURL).subscribe(
          response => {
            let data = response.json();
            for (var i = 0; i < data.jobs.length; i++){
              this.AllJobsURL.push(data.jobs[i].url);
            }
          },
          error => console.error(error)
        );
  
      }
  
      
      getBuilds(JobsURL: string){
  
        this.http.get(JobsURL).subscribe(
          response => {
            let data = response.json();
              for (var i = 0; i < data.builds.length; i++){
              this.AllBuildsURL.push(data.builds[i].url);
            }
  
          }
        )
  
      }
  
  
  
  
  
      getJob(JobsURL: string){
  
      this.http.get(JobsURL).subscribe(
          response => {
              let data = response.json();
              if (data.result == "SUCCESS"){
                this.successList.push(new Job(data.fullDisplayName, data.result, data.url));
              } else if (data.result == "FAILURE"){
                this.failureList.push(new Job(data.fullDisplayName,data.result, data.url));
              }
          },
          error => console.error(error)
      );
  
      }*/
    /*v2 obtiene jobs y toda la pesca.

    getAllTheJobs(JobsURL: string){

      this.http.get(JobsURL).subscribe(
        response => {
          let data = response.json();
          for (var i = 0; i < data.jobs.length; i++){
            this.http.get(data.jobs[i].url + this.finalURL).subscribe(
              response => {
                let data2 = response.json();
                for (var i = 0; i < data2.builds.length; i++){
                  this.http.get(data2.builds[i].url + this.finalURL).subscribe(
                    response => {
                      let data3 = response.json();
                      if (data3.result == "SUCCESS"){
                      this.successList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                      } else if (data3.result == "FAILURE"){
                      this.failureList.push(new Job(data3.fullDisplayName,data3.result, data3.url));
                      }
                    },
                    error => console.error(error)
                  )
                }
              },
              error =>console.error(error)
            )
          }
        },
        error => console.error(error)
      );

    }*/
    /*
        getAllTheJobs(JobsURL: string){
    
            this.http.get(JobsURL).subscribe(
                    response => {
                        let data = response.json();
                        for (var i = 0; i < data.jobs.length; i++){
                            this.http.get(data.jobs[i].url + this.finalURL).subscribe(
                                    response => {
                                        let data2 = response.json();
                                        if (data2.builds.length < 10){
                                            this.http.get(data2.builds[0].url + this.finalURL).subscribe(
                                                    response => {
                                                        let data3 = response.json();
                                                        if (data3.result == "SUCCESS"){
                                                            this.successList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                                                        } else if (data3.result == "FAILURE"){
                                                            this.failureList.push(new Job(data3.fullDisplayName,data3.result, data3.url));
                                                        }
                                                    },
                                                    error => console.error(error)
                                                    )
                                        } else {
                                            let isBroken: boolean = false;
                                        let added: boolean = false;
                                        for (var j = 0; j <10; j++){
                                            //let data3 = this.http.get(data2.builds[j].url + this.finalURL).map((res:Response) => res.json());
                        let data3 = this.http.get(data2.builds[j].url + this.finalURL).map(response => response.json());
                                            if (j==0 && data3.result == "FAILURE"){
                                                isBroken = true;
                                                let newJob = new Job (data3.fullDisplayName, data3.result, data3.url);
                                            } else if (data3.result == "SUCCESS") {
                                                this.successList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                                                added = true;
                                            }else if((j==1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8 || j == 9) && isBroken && data3.result == "SUCCESS"){
                                                isBroken = true;
                                            } else {
                                                isBroken = false;
                                            }
                      }
                                            if(isBroken && !added){
                                                this.brokenList.push(newJob);
                                            }else if (!isBroken && !added){
                                                this.failureList.push(newJob);
                                            }
                      }
                                        },
                                        error =>console.error(error)
                                    );
                    }
                        },
                        error => console.error(error)
                    );
    }*/
    AppComponent.prototype.getAllTheJobs = function (JobsURL) {
        var _this = this;
        this.http.get(JobsURL).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.jobs.length; i++) {
                _this.http.get(data.jobs[i].url + _this.finalURL).subscribe(function (response) {
                    var data2 = response.json();
                    if (data2.builds.length < 10) {
                        _this.http.get(data2.builds[0].url + _this.finalURL).subscribe(function (response) {
                            var data3 = response.json();
                            if (data3.result == "SUCCESS") {
                                _this.successList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                            }
                            else if (data3.result == "FAILURE") {
                                _this.failureList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                            }
                        }, function (error) { return console.error(error); });
                    }
                    else {
                        var jobsAux_1 = [];
                        var isBroken_1 = true;
                        for (var j = 9; j >= 0; j--) {
                            _this.http.get(data2.builds[j].url + _this.finalURL).subscribe(function (response) {
                                var data3 = response.json();
                                jobsAux_1.push(true);
                                if (data3.result == "FAILURE" && jobsAux_1.length < 10 && isBroken_1) {
                                    isBroken_1 = false;
                                }
                                else if (data3.result == "FAILURE" && jobsAux_1.length == 10 && !isBroken_1) {
                                    _this.failureList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                                }
                                else if (data3.result == "FAILURE" && jobsAux_1.length == 10 && isBroken_1) {
                                    _this.brokenList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                                }
                                else if (data3.result == "SUCCESS" && jobsAux_1.length == 10) {
                                    _this.successList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                                }
                                console.log(data3.fullDisplayName);
                            }, function (error) { return console.error(error); });
                            /*if (j==0 && data3.result == "FAILURE"){
                                isBroken = true;
                                let newJob = new Job (data3.fullDisplayName, data3.result, data3.url);
                            } else if (data3.result == "SUCCESS") {
                                this.successList.push(new Job(data3.fullDisplayName, data3.result, data3.url));
                                added = true;
                            }else if((j==1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8 || j == 9) && isBroken && data3.result == "SUCCESS"){
                                isBroken = true;
                            } else {
                                isBroken = false;
      }*/
                        }
                        /*if(jobsAux[0].result == "FAILURE" && jobsAux[1].result == "SUCCESS" && jobsAux[2].result == "SUCCESS" && jobsAux[3].result == "SUCCESS" && jobsAux[4].result == "SUCCESS" && jobsAux[5].result == "SUCCESS"
    && jobsAux[6].result == "SUCCESS" && jobsAux[7].result == "SUCCESS" && jobsAux[8].result == "SUCCESS" && jobsAux[9].result == "SUCCESS"){
                            this.brokenList.push(jobsAux[0]);
    }else if (jobsAux[0].result == "FAILURE"){
                            this.failureList.push(jobsAux[0]);
                        } else{
      this.successList.push(jobsAux[0])
    }*/
                    }
                }, function (error) { return console.error(error); });
            }
        }, function (error) { return console.error(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(136)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AppComponent);

var Job = (function () {
    function Job(name, result, urlJobExecution) {
        this.name = name;
        this.result = result;
        this.urlJobExecution = urlJobExecution;
    }
    return Job;
}());

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<input #enlace type=\"text\">\n<button (click)=\"getAllTheJobs(enlace.value)\">\n    Buscar\n</button>\n\n<body>\n  <div id=\"general\">\n    <div id=\"listaFallos\">\n\n      <h3>\n        {{title3}}\n      </h3>\n\n      <li *ngFor=\"let job of failureList\">\n        <a href={{job.url}}>{{job.name}}</a> , {{job.result}}\n      </li>\n\n    </div>\n    <div id=\"listaExitos\">\n\n      <h3>\n        {{title2}}\n      </h3>\n\n      <li *ngFor=\"let job of successList\">\n        <a href={{job.url}}> {{job.name}}</a> , {{job.result}}\n      </li>\n\n    </div>\n    <div id=\"listaFallosRepentinos\">\n\n      <h3>\n        {{title4}}\n      </h3>\n\n      <li *ngFor=\"let j of brokenList\">\n        <a href={{j.url}}> {{j.name}}</a> , {{j.result}}\n      </li>\n\n    </div>\n  </div>\n\n</body>"

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ })

},[161]);
//# sourceMappingURL=main.bundle.js.map