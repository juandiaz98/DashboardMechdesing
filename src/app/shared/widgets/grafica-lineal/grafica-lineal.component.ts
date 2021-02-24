import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafica-lineal',
  templateUrl: './grafica-lineal.component.html',
  styleUrls: ['./grafica-lineal.component.scss']
})
export class GraficaLinealComponent implements OnInit {

  @Input()
    color!: string;

  chartOptions ={};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void { 

    this.chartOptions =  {
      chart: {
          type: 'area',
          backgroundcolor: null,
          borderwidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
      },
      title:{
          text: null
      },
      subtitle:{
          text: null
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
          enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
          enabled: false
      },
      series: [{
          data: [50, 63, 49, 94, 70, 64, 89],
          color: this.color
      }]
    }
  }
}
