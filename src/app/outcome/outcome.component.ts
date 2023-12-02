import { Component, OnInit } from '@angular/core';
import { Outcome } from '../service/outcome-service';
import { HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {

  constructor(private httpClient : HttpClient, private datePipe : DatePipe) { }

  ngOnInit() {
  }

  
  overhead? : number;
  food? : number;
  medication? : number;
  vehicleFuel? : number;
  otherTax? : number;
  cumulativeChildCare? : number;
  cumulativeInsurances? : number;
  entertainment? : number;
  other? : number;
  selected? : Date

  public submit():void{

    const outcome = {
      dtoId: 1, date: this.datePipe.transform(this.selected, "yyyy-MM-dd"), overhead : this.overhead || 0, food: this.food || 0,
      medication : this.medication || 0, vehicleFuel : this.vehicleFuel || 0, otherTax : this.otherTax || 0, 
      cumulativeChildCare : this.cumulativeChildCare || 0, cumulativeInsurances : this.cumulativeInsurances || 0, 
      entertainment : this.entertainment || 0, other: this.other || 0, userId : 1
    } as unknown as Outcome;
    this.httpClient.post<Outcome>('http://localhost:8081/outcome/save', outcome)
    .subscribe(
      data => {
        console.log('Post request successful', data);
      },
      error => {
        console.error('Error in post request', error);
      }
    );
   
  }
}
