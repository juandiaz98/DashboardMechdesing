import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more'; // load highcharts-more
import HC_solid from 'highcharts/modules/solid-gauge';

HC_more(Highcharts); // init highcharts-more
HC_solid(Highcharts);

@Component({
  selector: 'app-solidgauge',
  templateUrl: './solidgauge.component.html',
  styleUrls: ['./solidgauge.component.scss']
})
export class SolidgaugeComponent implements OnInit, OnChanges{

  @Input() nombre!: string;
  @Input() Ymax!: Number;
  @Input() unidades!: String;
  @Input() valor!: Number;

   
   Highcharts = Highcharts;
   solidGaugeOptions: any;
   update: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.solidGaugeOptions = {
      chart: {
        type: 'solidgauge'
      },
  
      title: {text: this.nombre},
  
      pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor: '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },
  
      exporting: {
          enabled: false
      },
  
      tooltip: {
          enabled: false
      },
    credits: {
        enabled: false
    },
      // the value axis
      yAxis: {
        min: 0,
        max: this.Ymax,
          stops: [
              [0.1, '#55BF3B'], // green
              [0.5, '#DDDF0D'], // yellow
              [0.9, '#DF5353'] // red
          ],
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          labels: {
              y: 16
          }
      },
  
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      },
      series: [{
        name: this.nombre,
        data: [this.valor],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y: .1f}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">'+this.unidades+'</span>' +
                '</div>'
        },
        animation: {
          duration: 0
        },
        tooltip: {
            valueSuffix: this.unidades
        }
        }]
    };;
    //FIN DE LA CONFIGURACION DE LA TABLA
  }
  ngOnChanges(changes: SimpleChanges){
    if(this.solidGaugeOptions){
      this.solidGaugeOptions.series[0].data[0] = changes.valor.currentValue;
    }
    this.update = true;
  }
}