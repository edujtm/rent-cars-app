import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBookingPageComponent } from './cars-booking-page.component';

describe('CarsBookingPageComponent', () => {
  let component: CarsBookingPageComponent;
  let fixture: ComponentFixture<CarsBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsBookingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
