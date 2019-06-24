import { OccurenceTypes } from './occurence-types.enum';
import { ViaTypes } from './via-types.enum';
import { CurrencyTypes } from './currency-types.enum';

export interface ITransaction {
    name: string;
    amount: number;
    currency: CurrencyTypes;
    date: Date;
    occurance: OccurenceTypes;
    via: ViaTypes;
    description: string;
}


