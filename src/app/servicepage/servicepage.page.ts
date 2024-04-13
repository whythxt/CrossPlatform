import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  constructor(private tabService: TabService, private seriesService: SeriesService, private recursionService: RecursionService) { 
    Chart.register(...registerables);
  }

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  lineChartMethod() {
    const canvas = this.lineCanvas?.nativeElement;
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      console.error('Failed to get the canvas context.');
      return;
    }

    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
  
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      }
    });
  
    const xValuesRecursion = Array.from(this.xyRecursion.keys()).map(Number);
    const yValuesRecursion = Array.from(this.xyRecursion.values()).map(Number);
    
    const xValuesSeries = Array.from(this.xySeries.keys()).map(Number);
    const yValuesSeries = Array.from(this.xySeries.values()).map(Number);
  
    const xValuesTab = Array.from(this.xyTab.keys()).map(Number);
    const yValuesTab = Array.from(this.xyTab.values()).map(Number);
  
    this.lineChart.data.labels = xValuesRecursion;
    this.lineChart.data.datasets.push({
      label: 'Графік для рекурсії',
      data: yValuesRecursion,
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderDashOffset: 0.0,
      pointRadius: 1,
      spanGaps: false,
    });
  
    this.lineChart.data.labels = xValuesSeries;
    this.lineChart.data.datasets.push({
      label: 'Графік для ряду',
      data: yValuesSeries,
      fill: false,
      borderColor: 'rgba(54, 162, 235, 1)',
      borderDashOffset: 0.0,
      pointRadius: 1,
      spanGaps: false,
    });
  
    this.lineChart.data.labels = xValuesTab;
    this.lineChart.data.datasets.push({
      label: 'Графік для табулювання',
      data: yValuesTab,
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderDashOffset: 0.0,
      pointRadius: 1,
      spanGaps: false,
    });
  
    this.lineChart.update();
  }
  
  

  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      s = y.toFixed(4) + " ";

      y = this.xySeries.get(key);
      s += y.toFixed(4);

      y = this.xyRecursion.get(key);
      s += " " + y.toFixed(4);

      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    })
  }

  ras(xn: any, xk: any, h: any) {
    this.xyTab.clear();
    this.xySeries.clear();
    this.xyRecursion.clear();
    this.xyInput.clear();

    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
    
    console.log('Табулювання');
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);

    console.log('Ряд');
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);

    console.log('Рекурсія');
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);

    this.input();
    this.lineChartMethod();
  }

  ngOnInit() {
  }

}
