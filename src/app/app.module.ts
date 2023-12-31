import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IncomeComponent } from './income/income.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OutcomeComponent } from './outcome/outcome.component';
import { HeaderComponent } from './header/header.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumComponent } from './sum/sum.component';
import { IncomeTableComponent } from './income-table/income-table.component';
import { OutcomeTableComponent } from './outcome-table/outcome-table.component';


@NgModule({
  declarations: [								
    AppComponent,
      IncomeComponent,
      OutcomeComponent,
      HeaderComponent,
      CalculationsComponent,
      WelcomeComponent,
      SumComponent,
      IncomeTableComponent,
      OutcomeTableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatNativeDateModule,
    NgChartsModule,
    BrowserAnimationsModule
    

    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
