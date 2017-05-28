webpackJsonp([1,4],{

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 181;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(189);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
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
        this.title = 'Jenkins Infrastructure Monitor';
        this.title2 = 'Stable Jobs';
        this.title3 = 'Broken Jobs';
        this.title4 = 'Semistable Jobs';
        this.urlJenkins = elm.nativeElement.getAttribute("urlJenkins");
    }
    /*
    getAllTheJobs(){
     this.successList = [];
     this.failureList = [];
     this.brokenList = [];
       this.http.get(this.urlJenkins + this.finalURL).subscribe(
               response => {
                   let data = response.json();
                   for (var i = 0; i < data.jobs.length; i++){
                       this.http.get(data.jobs[i].url + this.finalURL).subscribe(
                               response => {
                                   let data2 = response.json();
                 let jobsAux: Job[] = [];
                 var jobsAux2: Job[] = [];
                 var init;
                 if (data2.builds.length < 10){
                   init = data2.builds.length - 1;
                 }else{
                   init = 9;
                 }
                 console.log(init);
                 for (var j = init; j >= 0; j--){
                 this.http.get(data2.builds[j].url + this.finalURL).subscribe(response => {
                     //console.log(data2.builds);
                     let data3 = response.json();
                     jobsAux.push(new Job(data3.fullDisplayName, data3.result, data2.url, data3.number));
                     jobsAux2.push(new Job(data3.fullDisplayName, data3.result, data2.url, data3.number));
                     
                   }, error => console.error(error));
                           
                 }
                 console.log(jobsAux);
                 console.log("1: " + jobsAux.length + " 2: " + jobsAux2.length);
 
       var lastOneResult:string="";
       var lastOneNumber:number=0;
       var numOfFails: number=0;

       for (let jA of jobsAux){
         console.log(jA);
               }
       for (var x=0; x<data2.builds.length; x++){
         if(lastOneNumber < jobsAux[x].number){
           lastOneResult = jobsAux[x].result;
           console.log("pasa por aqui 1");
         }
         if (jobsAux[x].result=="FAILURE"){
           numOfFails=numOfFails+1;
           console.log("pasa por aqui 2");
         }
               }
       //console.log(numOfFails);
       //console.log(jobsAux.length);
       //console.log(numOfFails/jobsAux.length);


                           
                                   },
                                   error =>console.error(error)
                               );
               }
                   },
                   error => console.error(error)
               );
       }
*/
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllTheJobs();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["IntervalObservable"].create(50000).subscribe(function (response) {
            _this.getAllTheJobs();
        });
    };
    /* EL INTENTO FALLIDO DE LAS PROMESAS
    getAllTheJobs(){
    var firstMethod = function(arrayURL,http,finURL) {
       var promise = new Promise(function(resolve, reject){
             
            for(var i = 0; i < arrayURL.length; i++){
             http.get(arrayURL[i].url + finURL).subscribe(
               response => {
                 let data2 = response.json();
                 console.log("estoy en el primer metodo");
                 //mierda = data2.builds;
                 //console.log(response);
               },
             );
            }
             resolve({dataSend: "Estoy en el segundo método"});
       });
       return promise;
    };
    
    var secondMethod = function(someStuff) {
       var promise = new Promise(function(resolve, reject){
             //console.log("estoy en el segundo metodo");
             console.log(someStuff.dataSend);
             resolve({newData: someStuff.data + ' some more data'});
       });
       return promise;
    };
    
    
    
    // this.http.get(this.urlJenkins + this.finalURL).subscribe(
    // response => {
    // let data = response.json();
    // let datajobs = data.jobs;
    // firstMethod(datajobs, this.http, this.finalURL).then(secondMethod);
    
    this.http.get(this.urlJenkins + this.finalURL).flatMap(
    response => {
    let data = response.json();
    let datajobs = data.jobs;
      return this.http.get(datajobs[0].url + this.finalURL);
        },
    ).subscribe(result2 => {
      let data2 = result2.json();
      console.log(data2.builds);
    },
    );
    
    
    }*/
    AppComponent.prototype.getJson = function (TheURL) {
        return new Promise(function (resolve, reject) {
            this.http.get(TheURL + this.finalURL).map(function (response) { return response.json(); });
            resolve({ newData: this.http.get(TheURL + this.finalURL).map(function (response) { return response.json(); }) });
        });
        //return new Promise (this.http.get(TheURL + this.finalURL)).then(response => response.json());
    };
    /*  EL BUENO PERO QUE LO HACE MAL
        getAllTheJobs(){
          this.successList = [];
          this.failureList = [];
          this.brokenList = [];
        this.http.get(this.urlJenkins + this.finalURL).subscribe(
                    response => {
                        let data = response.json();
                        for (var i = 0; i < data.jobs.length; i++){
                            this.http.get(data.jobs[i].url + this.finalURL).subscribe(
                                    response => {
                                        let data2 = response.json();
                      let numberOfFails: number = 0;
                      var init;
                                        if (data2.builds.length < 10){
                                            init = data2.builds.length-1;
                                        } else {
                        init = 9;
                      }
                      for (var j = init; j >= 1; j--){
                        console.log("Iteracion " + j + " numberOfFails " + numberOfFails);
                     this.http.get(data2.builds[j].url + this.finalURL).subscribe(response => {
                          //console.log(data2.builds);
                          let data3 = response.json();
                          console.log(data3);
                          if(data3.result == "FAILURE"){
                            numberOfFails = numberOfFails+1;
                          }
                        }, error => console.error(error));
                      }
                      //console.log(this.failureList);
                                    this.http.get(data2.builds[0].url + this.finalURL).subscribe(response => {
                        let data3 = response.json();
                        if (data3.result == "FAILURE"){
                          numberOfFails = numberOfFails + 1;
                        }
                        let average = numberOfFails/(init+1);
                        console.log(numberOfFails +" " + init+1 + " " +average);
                        if (average <= 0.1){
                          this.successList.push(new Job(data3.fullDisplayName, data3.result,data2.url, average));
                        } else if (average<0.8){
                          this.brokenList.push(new Job(data3.fullDisplayName, data3.result, data2.url, average));
                        }else {
                          this.failureList.push(new Job (data3.fullDisplayName, data3.result, data2.url, average));
                        }
                }, error => console.error(error));
                      
                                        },
                                        error =>console.error(error)
                                    );
                    }
                        },
                        error => console.error(error)
                    );
            //console.log(this.resultado);
            //console.log(this.brokenList);
            //console.log(this.successList);
            }*/
    AppComponent.prototype.getAllTheJobs = function () {
        var _this = this;
        this.successList = [];
        this.failureList = [];
        this.brokenList = [];
        this.http.get(this.urlJenkins + this.finalURL).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.jobs.length; i++) {
                _this.http.get(data.jobs[i].url + _this.finalURL).subscribe(function (response) {
                    var data2 = response.json();
                    //let numberOfFails: number = 0;
                    if (data2.builds.length == 1) {
                        console.log("debería meterse por aqui");
                        var source1 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL));
                        var subscription = source1.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_1 = x[i].json();
                                contador++;
                                if (data_1.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_1.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_1.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 2) {
                        var source2 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL));
                        console.log("acaso se está metiendo por aqui el hijo de puta?");
                        var subscription = source2.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_2 = x[i].json();
                                contador++;
                                if (data_2.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_2.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_2.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 3) {
                        var source3 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL));
                        var subscription = source3.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_3 = x[i].json();
                                contador++;
                                if (data_3.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_3.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_3.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 4) {
                        var source4 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL));
                        var subscription = source4.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_4 = x[i].json();
                                contador++;
                                if (data_4.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_4.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_4.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 5) {
                        var source5 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL), _this.http.get(data2.builds[4].url + _this.finalURL));
                        var subscription = source5.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_5 = x[i].json();
                                contador++;
                                if (data_5.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_5.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_5.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 6) {
                        var source6 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL), _this.http.get(data2.builds[4].url + _this.finalURL), _this.http.get(data2.builds[5].url + _this.finalURL));
                        var subscription = source6.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_6 = x[i].json();
                                contador++;
                                if (data_6.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_6.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_6.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 7) {
                        var source7 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL), _this.http.get(data2.builds[4].url + _this.finalURL), _this.http.get(data2.builds[5].url + _this.finalURL), _this.http.get(data2.builds[6].url + _this.finalURL));
                        var subscription = source7.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_7 = x[i].json();
                                contador++;
                                if (data_7.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_7.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_7.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 8) {
                        var source8 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL), _this.http.get(data2.builds[4].url + _this.finalURL), _this.http.get(data2.builds[5].url + _this.finalURL), _this.http.get(data2.builds[6].url + _this.finalURL), _this.http.get(data2.builds[7].url + _this.finalURL));
                        var subscription = source8.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_8 = x[i].json();
                                contador++;
                                if (data_8.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_8.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_8.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length == 9) {
                        var source9 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL), _this.http.get(data2.builds[4].url + _this.finalURL), _this.http.get(data2.builds[5].url + _this.finalURL), _this.http.get(data2.builds[6].url + _this.finalURL), _this.http.get(data2.builds[7].url + _this.finalURL), _this.http.get(data2.builds[8].url + _this.finalURL));
                        var subscription = source9.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_9 = x[i].json();
                                contador++;
                                if (data_9.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_9.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_9.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                    else if (data2.builds.length >= 10) {
                        var source10 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(_this.http.get(data2.builds[0].url + _this.finalURL), _this.http.get(data2.builds[1].url + _this.finalURL), _this.http.get(data2.builds[2].url + _this.finalURL), _this.http.get(data2.builds[3].url + _this.finalURL), _this.http.get(data2.builds[4].url + _this.finalURL), _this.http.get(data2.builds[5].url + _this.finalURL), _this.http.get(data2.builds[6].url + _this.finalURL), _this.http.get(data2.builds[7].url + _this.finalURL), _this.http.get(data2.builds[8].url + _this.finalURL), _this.http.get(data2.builds[9].url + _this.finalURL));
                        var subscription = source10.subscribe(function (x) {
                            var numberOfFails = 0;
                            var contador = 0;
                            var idLastBuild = 0;
                            var numberLastBuild = 0;
                            for (var i = 0; i < x.length; i++) {
                                var data_10 = x[i].json();
                                contador++;
                                if (data_10.result === "FAILURE") {
                                    numberOfFails++;
                                }
                                if (data_10.number > numberLastBuild) {
                                    idLastBuild = i;
                                    numberLastBuild = data_10.number;
                                }
                                //console.log(data.result);
                            }
                            var average = numberOfFails / contador;
                            console.log(numberOfFails + " " + contador);
                            console.log(average);
                            var data = x[idLastBuild].json();
                            if (average <= 0.1) {
                                _this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else if (average < 0.8) {
                                _this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                            else {
                                _this.failureList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                            }
                        }, function (err) {
                            console.log('Error: %s', err);
                        }, function () {
                            console.log('Completed');
                        });
                    }
                }, function (error) { return console.error(error); });
            }
        }, function (error) { return console.error(error); });
        //console.log(this.resultado);
        //console.log(this.brokenList);
        //console.log(this.successList);
        /*
        
          var source = Observable.forkJoin(
          this.http.get("http://localhost:8080/jenkins/job/Mal/7/api/json?pretty=true"),
          this.http.get("http://localhost:8080/jenkins/job/Mal/6/api/json?pretty=true"),
          this.http.get("http://localhost:8080/jenkins/job/Mal/5/api/json?pretty=true"),
          this.http.get("http://localhost:8080/jenkins/job/Mal/12/api/json?pretty=true")
         //Your http calls will be here instead
        );
        
        var subscription = source.subscribe(
          function (x) {
            let numberOfFails = 0;
            let contador = 0;
            for(var i = 0; i < x.length; i++ ){
              let data = x[i].json();
              contador++;
              if (data.result === "FAILURE"){
                numberOfFails++;
              }
              //console.log(data.result);
            }
            let average = numberOfFails/contador;
            console.log(numberOfFails + " " + contador);
            console.log(average);
          },
          function (err) {
            let numberOfFails = 0;
            let contador = 0;
            console.log(err.length);
            for(var i = 0; i < err.length; i++ ){
              let data = err[i].json();
              contador++;
              if (data.result === "FAILURE"){
                numberOfFails++;
              }
              console.log(data.result);
            }
            let average = numberOfFails/contador;
            console.log(numberOfFails + " " + contador);
            console.log(average);
          },
          function () {
            console.log('Completed');
          });*/
        // => Next: [42, 9, 3, 56]
    };
    AppComponent.prototype.isFailure = function (d) {
        return (d == "FAILURE");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(192),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AppComponent);

var Job = (function () {
    function Job(name, result, urlJob, urlBuild, number) {
        this.name = name;
        this.result = result;
        this.urlJob = urlJob;
        this.urlBuild = urlBuild;
        this.number = number;
    }
    return Job;
}());

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(187);
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

/***/ 189:
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

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(134)();
// imports


// module
exports.push([module.i, "header{\n    background: #2c3350;\n    color:#fff;\n}\n\n.main {\n    background: #f2f2f2;\n}\n\n.color1 {\n    background: #28a928;\n    color: #fff;\n}\n\n.color2 {\n    background: #ff2828;\n    color: #fff;\n}\n\nfooter {\n    background: #16a085;\n    color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "\n<head>\n<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\n<!-- Optional theme -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\n<!-- Latest compiled and minified JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n</head>\n\n<header>\n  <div class=\"container\">\n    <h1>{{title}}</h1>\n  </div>\n</header>\n\n\n<body>\n<div class = \"container\">\n  \n  <button (click)=\"getAllTheJobs()\">\n    Buscar\n  </button>\n\n\n  <div class=\"main\">\n    <div id=\"listaExitos\" class=\"main col-md-4\">\n      <h3>\n        {{title2}}\n      </h3>\n      <li *ngFor=\"let job of successList\">\n        <div *ngIf=\"isFailure(job.result)\" class=\"color2\">\n          <a href=\"{{job.urlJob}}\"><font color=white>{{job.name}}</font></a> , {{job.result}} , <a href=\"{{job.urlBuild}}\"><font color=white>{{job.number}}</font></a>\n        </div>\n        <div *ngIf=\"!isFailure(job.result)\" class=\"color1\">\n          <a href=\"{{job.urlJob}}\"> <font color=white>{{job.name}}</font></a> , {{job.result}} , <a href=\"{{job.urlBuild}}\"><font color=white>{{job.number}}</font></a>\n        </div>\n      </li>\n    </div>\n\n    <div id=\"listaFallosRepentinos\" class=\"main col-md-4\">\n      <h3>\n        {{title4}}\n      </h3>\n      <li *ngFor=\"let job of brokenList\">\n        <div *ngIf=\"isFailure(job.result)\" class=\"color2\">\n          <a href=\"{{job.urlJob}}\"><font color=white>{{job.name}}</font></a> , {{job.result}} , <a href=\"{{job.urlBuild}}\"><font color=white>{{job.number}}</font></a>\n        </div>\n        <div *ngIf=\"!isFailure(job.result)\" class=\"color1\">\n          <a href=\"{{job.urlJob}}\"><font color=white>{{job.name}}</font></a> , {{job.result}} , <a href=\"{{job.urlBuild}}\"><font color=white>{{job.number}}</font></a>\n        </div>\n      </li>\n    </div>\n\n    <div id=\"listaFallos\" class=\"main col-md-4\">\n      <h3>\n        {{title3}}\n      </h3>\n      <li *ngFor=\"let job of failureList\">\n        <div *ngIf=\"isFailure(job.result)\" class=\"color2\">\n          <a href=\"{{job.urlJob}}\"><font color=white>{{job.name}}</font></a> , {{job.result}} , <a href=\"{{job.urlBuild}}\"><font color=white>{{job.number}}</font></a>\n        </div>\n        <div *ngIf=\"!isFailure(job.result)\" class=\"color1\">\n          <a href=\"{{job.urlJob}}\"><font color=white>{{job.name}}</font></a> , {{job.result}} , <a href=\"{{job.urlBuild}}\"><font color=white>{{job.number}}</font></a>\n        </div>\n      </li>\n    </div>\n\n    \n  </div>\n</div>\n\n<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\n<!-- Optional theme -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\n<!-- Latest compiled and minified JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n</body>"

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(143);
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

},[463]);
//# sourceMappingURL=main.bundle.js.map