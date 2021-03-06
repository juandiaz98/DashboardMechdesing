import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more'; // load highcharts-more

HC_more(Highcharts); // init highcharts-more

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit, OnChanges {

    @Input() set velocidad(_velocidad: Number){
        if(this.chartOptions){
            /**************************************************************** */
            this.update = true;// REVISAR NO ESTA CAMBIANDO A FASLO ***************
            //**************************************************************** */
            this.chartOptions.series[0].data[0] = _velocidad;
            console.log(this.chartOptions.series[0].data)
            //console.log(_velocidad);
        }
        //this.update = false;
    };

  chartOptions:any;
  update: boolean = false;
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {text: 'velocidad'},

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    credits: {
        enabled: null
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h',
            y: 10
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [0],
        animation: {
            duration: 0
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
    }]
      //fin
    }
  }
  //FIN NGINIT
  ngOnChanges(changes: SimpleChanges){
    /*  if(this.chartOptions){
        this.chartOptions.series[0].data[0] = changes.velocidad.currentValue;
        console.log(changes.velocidad.currentValue);
    }
    this.update = true;*/
  }
}
