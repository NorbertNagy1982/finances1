import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { HttpClient} from '@angular/common/http';
import { MonthlyBalance } from '../service/monthlyBalance-service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

startDate? : Date;
endDate? : Date;
monthlyBalanceList : MonthlyBalance[] = [];
monthsList: string[] = [];
balanceList : number [] = [];
title = 'ng2-charts-demo';

public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [
    this.monthsList
  ],
  datasets: [
    {
      data: this.balanceList,
      label: 'Series A',
      fill: true,
      tension: 0.5,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ]
};
public lineChartOptions: ChartOptions<'line'> = {
  responsive: false
};
public lineChartLegend = true;

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
  }


public getMonthlyBalance():void{
  console.log(this.startDate);
this.httpClient.get<MonthlyBalance>(`http://localhost:8081/calculation/monthlybalance?start=${this.startDate?.toString}&end=${this.endDate?.toString}`)
.subscribe(
  (data : MonthlyBalance) => {
   this.balanceList.push(data.balance);
   this.monthsList.push(data.month);
  }
)
}  










}