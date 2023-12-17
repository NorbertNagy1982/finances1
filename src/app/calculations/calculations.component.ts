import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { HttpClient} from '@angular/common/http';
import { MonthlyBalance } from '../service/monthlyBalance-service';
import { DatePipe } from '@angular/common';

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


public lineChartData?: ChartConfiguration<'line'>['data'];
public lineChartOptions: ChartOptions<'line'> = {
  responsive: false
};
public lineChartLegend = true;

  constructor(private httpClient : HttpClient, private datePipe : DatePipe) { }

  ngOnInit() {
  }


  public getMonthlyBalance(): void {
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/calculation/monthlybalance?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.balanceList.push(item.balance);
            this.monthsList.push(item.month);
          });
          this.initializeChartData();
          this.balanceList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }
  
    

initializeChartData(): void {
  this.lineChartData = {
    labels: this.monthsList,
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
}




}