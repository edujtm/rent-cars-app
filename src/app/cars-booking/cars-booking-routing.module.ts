import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsBookingPageComponent } from './pages/cars-booking-page/cars-booking-page.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';

const ROUTES: Routes = [
  { path: 'bookings', component: CarsBookingPageComponent },
  { path: 'bookings/vehicles', component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CarsBookingRoutingModule {}
