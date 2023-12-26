import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IncomeDto } from '../service/income-service';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.css']
})
export class IncomeTableComponent implements OnInit {


  incomeList:IncomeDto[]=[];

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.getAllIncome();
  }


public getAllIncome():void{
  this.httpClient.get<IncomeDto[]>(`http://localhost:8081/income/all`)
  .subscribe(
     (data: IncomeDto[]) =>{
        data.forEach(item => {
          this.incomeList.push(item);
        });
      });
}



}
