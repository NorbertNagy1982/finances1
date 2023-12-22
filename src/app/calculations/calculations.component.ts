import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { HttpClient} from '@angular/common/http';
import { MonthlyBalance } from '../service/monthlyBalance-service';
import { DatePipe } from '@angular/common';
import { ChartData } from '../service/chart-service';
import { ChartLabel } from '../service/chart-label-service';

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
incomeList : number[] = [];
totalOutcomeList : number[] = [];
overheadList:number[]=[];
foodList:number[]=[];
medicationList:number[]=[];
fuelList:number[]=[];
otherTaxList:number[]=[];
childCareList:number[]=[];
insuranceList:number[]=[];
entertainmentList:number[]=[];
otherList:number[]=[];


title = 'ng2-charts-demo';
chatLabel? : string;

public lineChartData?: ChartConfiguration<'line'>['data'];
public lineChartOptions: ChartOptions<'line'> = {
  responsive: false,
  
};

public lineChartLegend = true;


monthlyBalanceBool: boolean = false;
monthlyIncomeBool: boolean = false;
monthlyTotalOutcomeBool:boolean = false;
monthlyOverheadBool:boolean = false;
monthlyFoodBool:boolean = false;
monthlyMedicationBool: boolean = false;
monthlyFuelBool:boolean=false;
monthlyOtherTaxBool:boolean=false;
monthlyChildBool:boolean=false;
monthlyInsuranceBool:boolean=false;
monthlyEntertainmentBool:boolean=false;
monthlyOtherBool:boolean = false;

topOffset=200;
chartLabelString?:string;
displayedChartNameList:ChartLabel[]=[];

monthlyBalanceLabel = {name:"Havi bevétel-kiadás különbözet",color:"black"} as ChartLabel
monthlyIncomeLabel = {name:"Havi bevételek",color:"red"} as ChartLabel
monthlyOutcomeLabel = {name:"Havi teljeskiadás",color:"green"} as ChartLabel
monthlyOverheadLabel = {name:"Havi rezsi",color:"brown"} as ChartLabel
monthlyFoodLabel = {name:"Havi élelmiszer kiadás",color:"blue"} as ChartLabel
monthlyMedicationLabel = {name:"Havi gyógyszer kiadás",color:"orange"} as ChartLabel
monthlyFuelLabel = {name:"Havi üzemanyag kiadás",color:"yellow"} as ChartLabel
monthlyOtherTaxLabel = {name:"Havi egyéb adókiadás",color:"grey"} as ChartLabel
monthlyChildCareLabel = {name:"Havi gyermekkel kapcsolatos kiadás",color:"pink"} as ChartLabel
monthlyInsuranceLabel = {name:"Havi biztosítás",color:"rgba(30, 179, 161)"} as ChartLabel
monthlyEntertainmentLabel = {name:"Havi szórakozásra fordított kiadás",color:"rgba(150, 114, 212)"} as ChartLabel
monthlyOtherLabel = {name:"Havi egyéb kiadás",color:"rgba(16, 227, 23)"} as ChartLabel

chartLabelList:ChartLabel[]=[this.monthlyBalanceLabel,this.monthlyIncomeLabel,this.monthlyOutcomeLabel,this.monthlyOverheadLabel,
this.monthlyFoodLabel,this.monthlyMedicationLabel,this.monthlyFuelLabel,this.monthlyOtherTaxLabel,this.monthlyChildCareLabel,
this.monthlyInsuranceLabel,this.monthlyEntertainmentLabel,this.monthlyOtherLabel];


  constructor(private httpClient : HttpClient, private datePipe : DatePipe) { }

  ngOnInit() {
  }



  public getMonthlyBalance(): void {
    this.chatLabel = "Havi bevétel-kiadás különbözet"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/calculation/monthlybalance?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.balanceList.push(item.balance);
            this.monthsList.push(item.month);
          });
          this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList,
            this.medicationList,this.fuelList,this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
            this.otherList);
        // this.balanceList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyIncome(): void {
    this.chatLabel = "Havi bevételek"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/income/monthlysum?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.incomeList.push(item.balance);
            this.monthsList.push(item.month);
          });
          this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList,
            this.medicationList, this.fuelList,this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
            this.otherList);
        //  this.incomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyTotalOutcome(): void {
    this.chatLabel = "Havi teljes kiadás"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/monthlysum?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.totalOutcomeList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList,
          this.medicationList, this.fuelList,this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyOverhead(): void {
    this.chatLabel = "Havi rezsi"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/overhead?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.overheadList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList,
          this.medicationList, this.fuelList,this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyFood(): void {
    this.chatLabel = "Havi rezsi"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/food?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.foodList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList,
          this.medicationList, this.fuelList,this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyMedication(): void {
    this.chatLabel = "Havi rezsi"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/medication?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.medicationList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyFuel(): void {
    this.chatLabel = "Havi üzemanyag"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/fuel?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.fuelList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyOtherTax(): void {
    this.chatLabel = "Havi egyéb adó"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/othertax?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.otherTaxList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyChildCare(): void {
    this.chatLabel = "Havi gyerekre fordított kiadás"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/childcare?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.childCareList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyInsurance(): void {
    this.chatLabel = "Havi biztosításra fordított kiadás"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/insurance?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.insuranceList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  
  public getMonthlyEntertainment(): void {
    this.chatLabel = "Havi szórakozásra fordított kiadás"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/entertainment?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.entertainmentList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }

  public getMonthlyOther(): void {
    this.chatLabel = "Havi egyéb kiadás"
    let start = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    let end = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.httpClient.get<any[]>(`http://localhost:8081/outcome/other?start=${start}&end=${end}`)
      .subscribe(
        (data: any[]) => {
          data.forEach(item => {
            this.otherList.push(item.balance);
            this.monthsList.push(item.month);
          });
         this.initializeChartData(this.balanceList, this.incomeList, this.totalOutcomeList, this.overheadList, this.foodList, 
          this.medicationList, this.fuelList, this.otherTaxList,this.childCareList,this.insuranceList,this.entertainmentList,
          this.otherList);
        //  this.totalOutcomeList= [];
          this.monthsList=[];
        },
        (error) => {
          console.error('Error fetching monthly balance:', error);
        }
      );
  }


  setGraphData():void{
    this.displayedChartNameList=[];
     if (this.monthlyBalanceBool){
      this.getMonthlyBalance();
      this.displayedChartNameList.push(this.chartLabelList[0])
     } else this.balanceList = [];
     if (this.monthlyIncomeBool){
      this.getMonthlyIncome();
      this.displayedChartNameList.push(this.chartLabelList[1])
     } else this.incomeList = [];
     if (this.monthlyTotalOutcomeBool){
      this.getMonthlyTotalOutcome();
      this.displayedChartNameList.push(this.chartLabelList[2])
     } else this.totalOutcomeList = [];
     if (this.monthlyOverheadBool){
      this.getMonthlyOverhead();
      this.displayedChartNameList.push(this.chartLabelList[3])
     } else this.overheadList=[];
     if(this.monthlyFoodBool){
      this.getMonthlyFood()
      this.displayedChartNameList.push(this.chartLabelList[4])
     }else this.foodList= [];
     if(this.monthlyMedicationBool){
      this.getMonthlyMedication();
      this.displayedChartNameList.push(this.chartLabelList[5])
     }else this.medicationList=[];
     if(this.monthlyFuelBool){
      this.getMonthlyFuel();
      this.displayedChartNameList.push(this.chartLabelList[6])
     }else this.fuelList=[];
     if(this.monthlyOtherTaxBool){
      this.getMonthlyOtherTax();
      this.displayedChartNameList.push(this.chartLabelList[7])
     }else this.otherTaxList=[];
     if(this.monthlyChildBool){
      this.getMonthlyChildCare();
      this.displayedChartNameList.push(this.chartLabelList[8])
     }else this.childCareList=[];
     if (this.monthlyInsuranceBool){
      this.getMonthlyInsurance()
      this.displayedChartNameList.push(this.chartLabelList[9])
     }else this.insuranceList=[];
     if(this.monthlyEntertainmentBool){
      this.getMonthlyEntertainment();
      this.displayedChartNameList.push(this.chartLabelList[10])
     }else this.entertainmentList=[];
     if(this.monthlyOtherBool){
      this.getMonthlyOther();
      this.displayedChartNameList.push(this.chartLabelList[11])
     }else this.otherList=[];
  }  
    

initializeChartData(balance: number[], monthlyIncome: number[], monthlyTotalOutcome:number[], monthlyOverhead:number[],
  monthlyFood:number[], monthlyMedication:number[], monthlyFuel:number[], otherTax:number[],childCare:number[],
  monthlyInsurance:number[],monthlyEntertainment:number[],other:number[]): void {
  this.lineChartData = {
    labels: this.monthsList,
    datasets: [
      {
        data: balance,
            label: "Havi bevétel-kiadás egyenleg",
            fill: false,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'black'
      },
      {
        data: monthlyIncome,
            label: "Havi bevétel",
            fill: false,
            tension: 0.5,
            borderColor: 'red',
            backgroundColor: 'red'
      }, 
      {
        data: monthlyTotalOutcome,
        label: "Havi teljes kiadás",
        fill: false,
        tension: 0.5,
        borderColor: 'green',
        backgroundColor: 'green'
      },
      {
        data: monthlyOverhead,
        label: "Havi rezsi",
        fill: false,
        tension: 0.5,
        borderColor: 'brown',
        backgroundColor: 'brown'
      },
      {
        data: monthlyFood,
        label: "Havi élelmiszer",
        fill: false,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'blue'
      },
      {
        data: monthlyMedication,
        label: "Havi gyógyszer",
        fill: false,
        tension: 0.5,
        borderColor: 'orange',
        backgroundColor: 'orange'
      },
      {
        data: monthlyFuel,
        label: "Havi üzemanyag",
        fill: false,
        tension: 0.5,
        borderColor: 'yellow',
        backgroundColor: 'yellow'
      },
      {
        data: otherTax,
        label: "Havi egyéb adó",
        fill: false,
        tension: 0.5,
        borderColor: 'grey',
        backgroundColor: 'grey'
      },
      {
        data: childCare,
        label: "Havi gyerek kiadás",
        fill: false,
        tension: 0.5,
        borderColor: 'pink',
        backgroundColor: 'pink'
      },
      {
        data: monthlyInsurance,
        label: "Havi biztosítás",
        fill: false,
        tension: 0.5,
        borderColor: 'rgba(30, 179, 161)',
        backgroundColor: 'rgba(30, 179, 161)'
      },
      {
        data: monthlyEntertainment,
        label: "Havi szórakozás",
        fill: false,
        tension: 0.5,
        borderColor: 'rgba(150, 114, 212)',
        backgroundColor: 'rgba(150, 114, 212)'
      },
      {
        data: other,
        label: "Havi egyéb kiadás",
        fill: false,
        tension: 0.5,
        borderColor: 'rgba(16, 227, 23)',
        backgroundColor: 'rgba(16, 227, 23)'
      }
    ]
  };
}




}