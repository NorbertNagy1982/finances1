import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType} from "chart.js";
import { HttpClient} from '@angular/common/http';
import { MonthlyBalance } from '../service/monthlyBalance-service';
import { DatePipe } from '@angular/common';
import { ChartData } from '../service/chart-service';
import { ChartLabel } from '../service/chart-label-service';
import { ChartDataset } from 'chart.js';


@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  startDate? : Date;
  endDate? : Date;

  
sumBalanceBool: boolean = false;
sumIncomeBool: boolean = false;
sumTotalOutcomeBool:boolean = false;
sumOverheadBool:boolean = false;
sumFoodBool:boolean = false;
sumMedicationBool: boolean = false;
sumFuelBool:boolean=false;
sumOtherTaxBool:boolean=false;
sumChildBool:boolean=false;
sumInsuranceBool:boolean=false;
sumEntertainmentBool:boolean=false;
sumOtherBool:boolean = false;

barChartDataList:number[]=[];

public barChartOptions: ChartOptions = {responsive: true};
public barChartLabels: string[] = [];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartData?: ChartDataset[];



  constructor(private httpClient : HttpClient, private datePipe : DatePipe) { }

  ngOnInit() {
  }

  public getSumBalance(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/calculation/sumbalance?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Bevétel-kiadás különbözet");
            this.initializeChartData();
          });
  }

  public getSumIncome(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/income/sumincome?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Teljes bevétel");
            this.initializeChartData();
          });
  }

  public getSumOutcome(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumoutcome?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Teljes kiadás");
            this.initializeChartData();
          });
  }
  
  public getSumOverhead(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumoverhead?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Rezsi");
            this.initializeChartData();
          });
  }

  public getSumFood(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumfood?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Élelmiszer");
            this.initializeChartData();
          });
  }

  public getSumMedication(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/summedication?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Gyógyszer");
            this.initializeChartData();
          });
  }

  public getSumFuel(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumfuel?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Üzemanyag");
            this.initializeChartData();
          });
  }

  public getSumOtherTax(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumothertax?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Egyéb adó");
            this.initializeChartData();
          });
  }

  public getSumChildCare(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumchildcare?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Gyerekre fordított kiadás");
            this.initializeChartData();
          });
  }

  public getSumInsurance(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/suminsurance?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Biztosítás");
            this.initializeChartData();
          });
  }

  public getSumEntertainment(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumentertainment?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Szórakozás");
            this.initializeChartData();
          });
  }

  
  public getSumOther(): void {
    let start = this.startDate ? this.datePipe.transform(this.startDate, "yyyy-MM-dd"):'';
    let end = this.endDate ? this.datePipe.transform(this.endDate, "yyyy-MM-dd"):'';
    this.httpClient.get<number>(`http://localhost:8081/outcome/sumother?start=${start}&end=${end}`)
      .subscribe(
         data =>{
            this.barChartDataList.push(data);
            this.barChartLabels.push("Egyéb kiadás");
            this.initializeChartData();
          });
  }

  setGraphData():void{
    this.barChartDataList=[];
    this.barChartLabels = [];
    if(this.sumBalanceBool){
      this.getSumBalance();
    }
    if(this.sumIncomeBool){
      this.getSumIncome();
    }
    if(this.sumTotalOutcomeBool){
      this.getSumOutcome();
    }
    if (this.sumOverheadBool){
      this.getSumOverhead();
    }
    if (this.sumFoodBool){
      this.getSumFood();
    }
    if(this.sumMedicationBool){
      this.getSumMedication();
    }
    if(this.sumFuelBool){
      this.getSumFuel();
    }
    if(this.sumOtherTaxBool){
      this.getSumOtherTax();
    }
    if(this.sumChildBool){
      this.getSumChildCare();
    }
    if(this.sumInsuranceBool){
      this.getSumInsurance();
    }
    if(this.sumEntertainmentBool){
      this.getSumEntertainment();
    }
    if(this.sumOtherBool){
      this.getSumOther();
    }
  }


initializeChartData():void{
  this.barChartData = [
    { data: this.barChartDataList, label: 'Összesített adatok a kiválasztott intervallumban', backgroundColor:'blue' },
  ];
}


}
