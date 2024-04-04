import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  // Поле для створення графіку
  // Позначаємо змінну як додаткову
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef; // тип any тип для якого не потрібна перевірка типів
  lineChart: any;
  xn: number = 2.9;
  xk: number = 17.48;
  h: number = 0.3;
  a: number = 0.3;
  task: number = 1;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];
  selectedEquation: string = '';
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {}

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          },
        ],
      },
    });
  }

  graphras(xn: any, xk: any, a:any, h: any) {
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y: number;
    x = this.xn;
    this.xx = [];
    this.yy = [];

    if (this.selectedEquation === 'first') {
      while (x <= this.xk) {
        if (x <= 0) {
            y = Math.pow(Math.E, -2 * x) * Math.pow(2 * Math.pow(x, 4) * Math.pow(x, 2) + 1, 1 / 7);
        } else if (x <= this.a) {
            y = Math.abs(Math.pow(x, 3) + Math.pow(10, x));
        } else {
            y = Math.pow(2 * Math.pow(x, 4) + Math.pow(x, 2) + 1, 1 / 7);
        }
  
          this.xx.push(x.toFixed(1));
          this.yy.push(parseFloat(y.toFixed(1)));
          let s = 'x= ' + x.toFixed(1) + ' y=' + y.toFixed(1);
          this.data1.push(s);
          x += this.h;
      }
    } else if (this.selectedEquation === 'second') {
      while (x <= this.xk) {
        let ctgValue = 1 / Math.tan(2 * Math.pow(x, 3));

        if (Math.abs(x) < 0.01 || Math.abs(ctgValue) < 0.01) {
            // Уникнення ділення на нуль або надто малих значень
            y = NaN;
        } else {
            y = (Math.pow(x, 3) + 2 * Math.pow(x, 2) - 4 * x) / (Math.pow(x, 5) * ctgValue);
        }

        this.xx.push(x.toFixed(1));
        this.yy.push(parseFloat(y.toFixed(1)));
        let s = 'x= ' + x.toFixed(1) + ' y=' + y.toFixed(1);
        this.data1.push(s);
        x += this.h;
      }
    } else if (this.selectedEquation === 'third') {
      while (x <= this.xk) {
        let sqrtValue = Math.sqrt(Math.abs(x ** 3));
        let sinValue = Math.sin(x ** 3);
        let cosValue = Math.cos(x ** 2) ** 2;

        if (sqrtValue === 0 || sinValue === 0) {
            // Уникнення ділення на нуль
            y = NaN;
        } else {
            y = cosValue / (2 * sqrtValue * sinValue);
        }

        this.xx.push(x.toFixed(1));
        this.yy.push(parseFloat(y.toFixed(1)));
        let s = 'x= ' + x.toFixed(1) + ' y=' + y.toFixed(1);
        this.data1.push(s);
        x += this.h;
    }
    }

    this.lineChartMethod();
  }
}