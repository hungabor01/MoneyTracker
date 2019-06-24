import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BettingComponent } from '../betting/betting.component';
import { HomeComponent } from '../home/home.component';
import { CashFlowComponent } from '../cash-flow/cash-flow.component';
import { WikipediaComponent } from '../wikipedia/wikipedia.component';
import { InvestmentComponent } from '../investment/investment.component';

const routes: Routes = [
  { path: 'wikipedia', component: WikipediaComponent},
  { path: 'investment', component: InvestmentComponent},
  { path: 'cashflow', component: CashFlowComponent},
  { path: 'betting', component: BettingComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
