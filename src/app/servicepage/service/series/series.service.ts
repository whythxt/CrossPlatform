import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getSeries(x: number): number {
    let sum: number = 0,
        min = 1E-12,
        n = 0,
        mem = 1,
        mul = 1;

    do {
      n++;
      mem = Math.sin(n * x) / n;
      sum += mul * mem;
      mul;
    } while (Math.abs(mem) > min);

    return sum;
  }

  getTab(xn: number = -Math.PI, xk: number = Math.PI, h: number = 0.1) {
    let x = xn,
        y = 0.0;

    while (x <= xk) {
      const series = this.getSeries(x);
      y = series;

      this.xy.set(x, y);

      if (this.logService)
        this.logService.write("x = " + x.toFixed(2) + " y = " + y.toFixed(4));
      x = x + h;
    }

    return this.xy;
  }
}
