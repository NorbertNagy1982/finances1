import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { CalculationsComponent } from './calculations/calculations.component';

const routes: Routes = [

{
  path: "",
  component: IncomeComponent
}, 

{
  path: "",
  component: OutcomeComponent
},

{
  path: "calculations",
  component: CalculationsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
