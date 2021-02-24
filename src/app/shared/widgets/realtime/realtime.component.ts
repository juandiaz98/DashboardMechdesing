import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { webSocket } from 'rxjs/webSocket';
import { of , Subscription } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
  

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {

  prueba = {};
  gaugeOptions = {};
  chartOptions = {};

  title = 'Angular-RxJsWebSocket-HighCharts';
  rate: any;
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
  subject = webSocket('wss://ws.coincap.io/prices?assets=bitcoin')

  constructor() {}

  ngOnInit(): void {

    this.chartOptions = {
        series: [{
          data: this.chardata,
        }],
        chart: {
          type: "spline",
          zoomType: 'x'
        },
        title: {
          text: "linechart",
        },
    };

    this.rate = this.subject.pipe(
        concatMap(item => of (item).pipe(delay(1000)))
      ).subscribe(data => {
        this.rate = data;
        for (var i =0; i<19;i++){
            this.chardata[i]=this.chardata[i+1]
        }
        this.chardata[19]=(Number(this.rate.bitcoin))
        var x = (new Date()).getTime()
        console.log(x)
        this.chartOptions = {
          series: [{
            data: this.chardata,
          }, ]
        };
      })

    /*this.chartOptions = {
        chart: {
            type: 'spline',
            animation: Highcharts.SVGElement, // don't animate in old IE
            marginRight: 10,
            
        events: {
            
            load: function () {
                // set up the updating of the chart each second
                setInterval(function () {
                    
                    var x = (new Date()).getTime(), // current time	
                    y = Math.random();
                    console.log(y);
                }, 1000);
            }
        }
        },
    
        time: {
            useUTC: false
        },
    
        title: {
            text: 'Live random data'
        },
    
        
    
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
    
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
    
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },
    
        legend: {
            enabled: false
        },
    
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    }*/
  }
}
