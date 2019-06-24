import { Component, OnInit } from '@angular/core';
import { CurrencyTypes } from './currency-types.enum';
import { OccurenceTypes } from './occurence-types.enum';
import { ViaTypes } from './via-types.enum';

@Component({
  selector: 'app-transaction-property',
  templateUrl: './transaction-property.component.html',
  styleUrls: ['./transaction-property.component.scss']
})
export class TransactionPropertyComponent implements OnInit {

  currencies = Object.values(CurrencyTypes);
  occurences = Object.values(OccurenceTypes);
  vias = Object.values(ViaTypes);

  constructor() { }

  ngOnInit() {
  }

}
