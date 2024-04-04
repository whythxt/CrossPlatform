import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DerivativeCalculatorService {

  constructor() { }

  calculateDerivative(fx: string, x0: number, h: number): number {
    const f = (x: number) => eval(fx);
    const derivative = (f(x0 + h) - f(x0 - h)) / (2 * h);
    return derivative;
  }
}
