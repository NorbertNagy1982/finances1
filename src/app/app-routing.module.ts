import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

/*
  {
    path: "",
    component: WelcomeComponent,
    children: 
    [
{
  path: "income",
  component: IncomeComponent
}, 

{
  path: "outcome",
  component: OutcomeComponent
}]},

{
  path: "calculations",
  component: CalculationsComponent
}
    
  */



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
