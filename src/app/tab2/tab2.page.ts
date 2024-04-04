import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  a: number = 0;
  b: number = 0;
  d: number = 0;

  ras(a: any, b: any) {

    try {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.d = 0;

        if (isNaN(this.a) || isNaN(this.b)) {
            throw new Error("not a number");
        }

        const start = Math.min(a, b);
        const end = Math.max(a, b);

        for (let i = start; i <= end; i++) {
        // Якщо число парне, додаємо його до суми
          if (i % 2 == 0) {
            this.d += i;
            console.log(this.d);
          }
    }


    } catch (error) {
        console.log(error);
    }
}

}
