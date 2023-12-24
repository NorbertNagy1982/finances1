import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SumComponent } from './sum/sum.component';

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
    }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
