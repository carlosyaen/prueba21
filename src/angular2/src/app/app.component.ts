import { Component,ElementRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //private successList:Job[]=[new Job(1,"SleepBuilder"),new Job(2, "Monitor")];
  private AllJobsURL: string[] = [];
  private AllBuildsURL: string [] = [];
  private finalURL = "api/json?pretty=true";
  private URL;
  private successList: Job[] = [];
  private failureList:Job[]=[];
  private brokenList: Job [] = [];
  private urlJenkins: string;

  constructor(elm: ElementRef, private http: Http){
    this.urlJenkins = elm.nativeElement.getAttribute("urlJenkins");
}

  title = 'Jenkins Infrastructure Monitor'; 
  title2 = 'Stable Jobs'; 
  title3 = 'Broken Jobs';
  title4 = 'Semistable Jobs';


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
   ngOnInit(){ 
     this.getAllTheJobs();
     IntervalObservable.create(50000).subscribe(response => {
        this.getAllTheJobs();
     });

   }
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


getJson(TheURL: string) {


   return new Promise(function(resolve, reject){
         this.http.get(TheURL + this.finalURL).map(response => response.json());
         resolve({newData: this.http.get(TheURL + this.finalURL).map(response => response.json())});
   });


  
  //return new Promise (this.http.get(TheURL + this.finalURL)).then(response => response.json());
}
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
                  //let numberOfFails: number = 0;

                  if (data2.builds.length==1){
                    console.log("debería meterse por aqui");
                                      var source1 = Observable.forkJoin(
                  this.http.get(data2.builds[0].url + this.finalURL)
                  );
                    var subscription = source1.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                } else if (data2.builds.length ==2){

                  var source2 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL)
                  );


                    console.log("acaso se está metiendo por aqui el hijo de puta?");
                    var subscription = source2.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==3){
                                      var source3 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL)
                  );
                    var subscription = source3.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==4){
                                      var source4 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL)
                  );
                    var subscription = source4.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==5){
                                      var source5 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL),
                    this.http.get(data2.builds[4].url + this.finalURL)
                  );
                    var subscription = source5.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==6){
                                      var source6 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL),
                    this.http.get(data2.builds[4].url + this.finalURL),
                    this.http.get(data2.builds[5].url + this.finalURL)
                  );
                    var subscription = source6.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==7){
                                      var source7 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL),
                    this.http.get(data2.builds[4].url + this.finalURL),
                    this.http.get(data2.builds[5].url + this.finalURL),
                    this.http.get(data2.builds[6].url + this.finalURL)                    
                  );
                    var subscription = source7.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==8){
                                      var source8 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL),
                    this.http.get(data2.builds[4].url + this.finalURL),
                    this.http.get(data2.builds[5].url + this.finalURL),
                    this.http.get(data2.builds[6].url + this.finalURL),
                    this.http.get(data2.builds[7].url + this.finalURL)
                  );
                    var subscription = source8.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  } else if (data2.builds.length==9){
                                      var source9 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL),
                    this.http.get(data2.builds[4].url + this.finalURL),
                    this.http.get(data2.builds[5].url + this.finalURL),
                    this.http.get(data2.builds[6].url + this.finalURL),
                    this.http.get(data2.builds[7].url + this.finalURL),
                    this.http.get(data2.builds[8].url + this.finalURL)
                  );
                    var subscription = source9.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }

  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  }else if (data2.builds.length >=10){
                                      var source10 = Observable.forkJoin(
                    this.http.get(data2.builds[0].url + this.finalURL),
                    this.http.get(data2.builds[1].url + this.finalURL),
                    this.http.get(data2.builds[2].url + this.finalURL),
                    this.http.get(data2.builds[3].url + this.finalURL),
                    this.http.get(data2.builds[4].url + this.finalURL),
                    this.http.get(data2.builds[5].url + this.finalURL),
                    this.http.get(data2.builds[6].url + this.finalURL),
                    this.http.get(data2.builds[7].url + this.finalURL),
                    this.http.get(data2.builds[8].url + this.finalURL),
                    this.http.get(data2.builds[9].url + this.finalURL)
                  );
                    var subscription = source10.subscribe(
   (x) => {
    let numberOfFails = 0;
    let contador = 0;
    let idLastBuild = 0;
    let numberLastBuild = 0;
    for(var i = 0; i < x.length; i++ ){
      let data = x[i].json();
      contador++;
      if (data.result === "FAILURE"){
        numberOfFails++;
      }
      if (data.number > numberLastBuild){
        idLastBuild = i;
        numberLastBuild = data.number;
      }
      //console.log(data.result);
    }
    let average = numberOfFails/contador;
    console.log(numberOfFails + " " + contador);
    console.log(average);
    let data = x[idLastBuild].json();

                    if (average <= 0.1){
                      this.successList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    } else if (average<0.8){
                      this.brokenList.push(new Job(data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }else {
                      this.failureList.push(new Job (data.fullDisplayName, data.result, data2.url, data.url, data.number));
                    }


  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
                  }
  

              
                  
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
}
    
isFailure(d: string){
  return (d=="FAILURE");
}

}


export class Job {


  constructor(public name:string, public result: string, public urlJob: string, public urlBuild:string, public number: number){

  }


     
}

