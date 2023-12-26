import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SumComponent } from './sum/sum.component';
import { IncomeTableComponent } from './income-table/income-table.component';
import { OutcomeTableComponent } from './outcome-table/outcome-table.component';

const routes: Routes = [

    {
      path:"calculations",
      component: CalculationsComponent
    }, 

    {
      path:"",
      component: WelcomeComponent
    },

    {
      path:"sum",
      component:SumComponent
    },
    {
      path:"income",
      component:IncomeTableComponent
    },
    {
      path:"outcome",
      component:OutcomeTableComponent
    }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
