import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidgaugeComponent } from './solidgauge.component';

describe('SolidgaugeComponent', () => {
  let component: SolidgaugeComponent;
  let fixture: ComponentFixture<SolidgaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidgaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidgaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
