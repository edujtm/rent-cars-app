import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsBookingPageComponent } from './pages/cars-booking-page/cars-booking-page.component';
import { CarsBookingRoutingModule } from './cars-booking-routing.module';

@NgModule({
  declarations: [CarsBookingPageComponent],
  imports: [CommonModule, CarsBookingRoutingModule],
  exports: [CarsBookingRoutingModule],
})
export class CarsBookingModule {}
