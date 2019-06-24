import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private _router: Router) {  }

  private isCashFlowCollapsed = false;
  private isInvestmentCollapsed = false;
  private isBettingCollapsed = false;
  private isWikipediasCollapsed = false;

  onNavigationClick(){
    this._router.navigate(['/home']);
  }

  onCashFlowClick(){
    if (!this.isCashFlowCollapsed) {
      this._router.navigate(['/cashflow']);
    }
    this.isCashFlowCollapsed = !this.isCashFlowCollapsed;
  }

  onInvestmentClick(){
    if (!this.isInvestmentCollapsed) {
      this._router.navigate(['/investment']);
    }
    this.isInvestmentCollapsed = !this.isInvestmentCollapsed;
  }

  onBettingClick(){
    if (!this.isBettingCollapsed) {
      this._router.navigate(['/betting']);
    }
    this.isBettingCollapsed = !this.isBettingCollapsed;
  }

  onWikipediaClick(){
    if (!this.isWikipediasCollapsed)
    {
      this._router.navigate(['/wikipedia']);
    }
    this.isWikipediasCollapsed = !this.isWikipediasCollapsed;
  }
}
