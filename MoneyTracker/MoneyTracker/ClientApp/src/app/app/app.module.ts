import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BettingModule } from '../betting/betting.module';
import { CashFlowModule } from '../cash-flow/cash-flow.module';
import { HomeModule } from '../home/home.module';
import { InvestmentModule } from '../investment/investment.module';
import { WikipediaModule } from '../wikipedia/wikipedia.module';

@NgModule({
  declarations: [
    AppComponent,   
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BettingModule,
    CashFlowModule,
    HomeModule,
    InvestmentModule,
    WikipediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
