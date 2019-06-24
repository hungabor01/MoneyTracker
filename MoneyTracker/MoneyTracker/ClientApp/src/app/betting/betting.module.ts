import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BettingRoutingModule } from './betting-routing.module';
import { BettingComponent } from './betting.component';

@NgModule({
  declarations: [BettingComponent],
  imports: [
    CommonModule,
    BettingRoutingModule
  ]
})
export class BettingModule { }
