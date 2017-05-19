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
     IntervalObservable.create(3000).subscribe(reponse => {
        this.getAllTheJobs();
     });
   }


 
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
        }
    
isFailure(d: string){
  return (d=="FAILURE");
}

}


export class Job {


  constructor(public name:string, public result: string, public url: string, public number: number){

  }


     
}

