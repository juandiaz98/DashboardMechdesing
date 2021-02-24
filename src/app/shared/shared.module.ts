import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { GraficaLinealComponent } from './widgets/grafica-lineal/grafica-lineal.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { RealtimeComponent } from './widgets/realtime/realtime.component';
import { HttpClientModule } from '@angular/common/http';
import { GaugeComponent } from './widgets/gauge/gauge.component';
import { SolidgaugeComponent } from './widgets/solidgauge/solidgauge.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    GraficaLinealComponent,
    RealtimeComponent,
    GaugeComponent,
    SolidgaugeComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    HttpClientModule 
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    GraficaLinealComponent,
    RealtimeComponent,
    GaugeComponent,
    SolidgaugeComponent
  ]
})

export class SharedModule { }
