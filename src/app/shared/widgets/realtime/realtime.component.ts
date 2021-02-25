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
  subject = webSocket('wss://ws.coincap.io/prices?assets=bitcoin,litecoin')

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
  }
}
