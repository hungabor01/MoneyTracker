import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaRoutingModule } from './wikipedia-routing.module';
import { WikipediaComponent } from './wikipedia.component';

@NgModule({
  declarations: [WikipediaComponent],
  imports: [
    CommonModule,
    WikipediaRoutingModule
  ]
})
export class WikipediaModule { }
