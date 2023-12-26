import { Component, OnInit } from '@angular/core';
import { Outcome } from '../service/outcome-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-outcome-table',
  templateUrl: './outcome-table.component.html',
  styleUrls: ['./outcome-table.component.css']
})
export class OutcomeTableComponent implements OnInit {

outcomeList:Outcome[]=[]

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getAllOutcome();
  }


  public getAllOutcome():void{
    this.httpClient.get<Outcome[]>(`http://localhost:8081/outcome/all`)
    .subscribe(
       (data: Outcome[]) =>{
          data.forEach(item => {
            this.outcomeList.push(item);
          });
        });
  }


}
