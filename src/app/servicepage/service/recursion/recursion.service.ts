import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class RecursionService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) {}

  getRecursion(x: number, mem: number = x, mul: number = 1, n: number = 1, maxIterations: number = 1000): number {
    const min = 1E-12;
    const term = Math.sin(n * x) / n;
  
    if (Math.abs(term) > min && n < maxIterations) {
      return term + this.getRecursion(x, mem, -mul, n + 1, maxIterations);
    } else {
      return 0;
    }
  }
  
  

  getTab(xn: number = -Math.PI, xk: number = Math.PI, h: number = 0.1) {
    let x = xn;

    while (x <= xk) {
      const func = (Math.PI - x) / 2;
      const rec = this.getRecursion(x);
      this.xy.set(x, func + rec);

      if (this.logService) {
        this.logService.write("x = " + x.toFixed(2) + " y = " + (func + rec).toFixed(4));
      }
      x = x + h;
    }

    return this.xy;
  }
}

