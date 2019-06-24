import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from './cash-flow.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { ChartsComponent } from './charts/charts.component';
import { TransactionPropertyComponent } from './transaction-property/transaction-property.component';

@NgModule({
  declarations: [CashFlowComponent, IncomeComponent, ExpenseComponent, ChartsComponent, TransactionPropertyComponent],
  imports: [
    CommonModule,
    CashFlowRoutingModule
  ]
})
export class CashFlowModule { }
