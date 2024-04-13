import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class TabService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getTab(xn: number = -Math.PI, xk: number = Math.PI, h: number = 0.1) {
    let x = xn;
    let y = 0.0;

    while (x <= xk) {
      y = (Math.PI - x) / 2;
      this.xy.set(x, y);

      if (this.logService) 
        this.logService.write("x = " + x.toFixed(2) + " y = " + y.toFixed(4));
      x += h;
    }

    return this.xy;
  }
}


