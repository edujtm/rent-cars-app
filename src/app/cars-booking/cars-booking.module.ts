import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsBookingPageComponent } from './pages/cars-booking-page/cars-booking-page.component';
import { CarsBookingRoutingModule } from './cars-booking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookingTableComponent } from './components/booking-table/booking-table.component';
import { DiscountListComponent } from './components/discount-list/discount-list.component';

@NgModule({
  declarations: [CarsBookingPageComponent, BookingTableComponent, DiscountListComponent],
  imports: [CommonModule, CarsBookingRoutingModule, SharedModule],
  exports: [CarsBookingRoutingModule],
})
export class CarsBookingModule {}
