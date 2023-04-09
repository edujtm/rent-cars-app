import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsBookingPageComponent } from './pages/cars-booking-page/cars-booking-page.component';

const ROUTES: Routes = [{ path: 'bookings', component: CarsBookingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CarsBookingRoutingModule {}
