// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-chart-kepadatan',
//   templateUrl: './chart-kepadatan.component.html',
//   styleUrls: ['./chart-kepadatan.component.scss']
// })
// export class ChartKepadatanComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-kepadatan',
  templateUrl: './chart-kepadatan.component.html',
  styleUrls: ['./chart-kepadatan.component.scss']
})
export class ChartKepadatanComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Mobil', 'Motor', 'Bus','Truk','Sisa'];
  public doughnutChartData: MultiDataSet = [
    [35, 45, 10,6,4]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
