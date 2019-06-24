import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPropertyComponent } from './transaction-property.component';

describe('TransactionPropertyComponent', () => {
  let component: TransactionPropertyComponent;
  let fixture: ComponentFixture<TransactionPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
