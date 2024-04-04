import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] =[];
  n: number = 0;
  constructor() { }
  arrayras(n: any) {
    this.a = [];
    try {
      this.n = parseInt(n);

      if (isNaN(this.n) == true) {
        throw new Error('Parameter is not a number!');
      }
      if (n <= 0) {
        throw new Error('Paremeter less than zero');
      }

      let i: number = 0, j: number = 0;

      this.a = Array(this.n);
      
      for (i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);

        for (j = 0; j < this.n; j++) {
          let aa: number = Math.floor(Math.random() * 13) - 10;
          this.a[i][j] = aa;
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  getColor(b: number) {
    return b < 0 && b % 2 === 0 ? 'green' : '';
  } 
  ngOnInit() {
    
  }
}
