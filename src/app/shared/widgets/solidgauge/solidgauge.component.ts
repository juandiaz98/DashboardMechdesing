import { Component, OnInit } from '@angular/core';
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
export class SolidgaugeComponent implements OnInit {

  chartSpeed ={};
  chartRpm = {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    var gaugeOptions = {
      chart: {
        type: 'solidgauge'
      },

      title: null,

      pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor:
                  Highcharts.defaultOptions.legend?.backgroundColor || '#EEE',
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

      // the value axis
      yAxis: {
          stops: [
              [0.1, '#55BF3B'], // green
              [0.5, '#DDDF0D'], // yellow
              [0.9, '#DF5353'] // red
          ],
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              y: -70
          },
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
      }
    };
    // ajuste para grafica de velocidad
    this.chartSpeed = Highcharts.merge(gaugeOptions, {
      yAxis: {
          min: 0,
          max: 200,
          title: {
              text: 'Speed'
          }
      },
  
      credits: {
          enabled: false
      },
  
      series: [{
          name: 'Speed',
          data: [80],
          dataLabels: {
              format:
                  '<div style="text-align:center">' +
                  '<span style="font-size:25px">{y: .1f}</span><br/>' +
                  '<span style="font-size:12px;opacity:0.4">km/h</span>' +
                  '</div>'
          },
          tooltip: {
              valueSuffix: ' km/h'
          }
      }]
    })
  // Ajuste para grafica de velocidad angular
  this.chartRpm = Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 5,
        title: {
            text: 'RPM'
        }
    },
    credits: {
        enabled: false
    },

    series: [{
        name: 'RPM',
        data: [1],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y:.1f}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                '* 1000 / min' +
                '</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' revolutions/min'
        }
    }]
  })
  }

}
