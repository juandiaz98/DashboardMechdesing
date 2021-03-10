import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  vel_sensada: Number = 28;
  YmaxPotencia: Number = 600;
  pot_sensada: Number = 500;
  YmaxRPM: Number = 6;
  RPM_sensada: Number = 1;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.RPM_sensada = Math.random()*6;
      this.pot_sensada = Math.random()*600;
      this.vel_sensada = Math.round(Math.random()*200);
    }, 500);
  }

}
