import { Component, OnInit } from '@angular/core';
import { Income } from '../service/income-service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],

})
export class IncomeComponent implements OnInit {


cumulativeIncome? : number;
otherIncome? : number;
selected?: Date;




  constructor(private datePipe : DatePipe) { }

  ngOnInit() {
  }


  public submit():void{
   
   
    
    const income = {
      id: 1, dateOfIncome: this.datePipe.transform(this.selected, 'yyyy-MM-dd'), cumulativeSalary: this.cumulativeIncome, otherIncome: this.otherIncome,
      userId: 1
    } as unknown as Income;
    console.log(income)
  }



  

}
