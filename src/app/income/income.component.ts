import { Component, OnInit } from '@angular/core';
import { IncomeDto } from '../service/income-service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],

})
export class IncomeComponent implements OnInit {


cumulativeIncome? : number;
otherIncome? : number;
selected?: Date;




  constructor(private datePipe : DatePipe, private httpClient : HttpClient) { }

  ngOnInit() {
  }


  public submit():void{
    const income = {
      id: 1, dateOfIncome: this.datePipe.transform(this.selected, 'yyyy-MM-dd'), cumulativeSalary: this.cumulativeIncome, otherIncome: this.otherIncome,
      userId: 1
    } as unknown as IncomeDto;
    this.httpClient.post<IncomeDto>('http://localhost:8081/income/save', income)
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