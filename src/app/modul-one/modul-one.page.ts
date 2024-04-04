import { Component, OnInit } from '@angular/core';
import { DerivativeResult } from './interface/derivRes';

@Component({
  selector: 'app-modul-one',
  templateUrl: './modul-one.page.html',
  styleUrls: ['./modul-one.page.scss'],
})
export class ModulOnePage implements OnInit {
  calculatedDerivative: DerivativeResult = { value: 0 };

  constructor() { }

  ngOnInit() {
  }

  onDerivativeCalculated(derivative: DerivativeResult): void {
    this.calculatedDerivative = derivative;
}

}
