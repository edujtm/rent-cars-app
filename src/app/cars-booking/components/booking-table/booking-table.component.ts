import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, skipWhile } from 'rxjs';
import { LoadingState } from 'src/app/core/utils/custom-operators';
import { BookingService, Customer } from '../../services/booking.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
})
export class BookingTableComponent {
  readonly columns = ['Start Date', 'Final Date', 'Status', 'Payment Received', 'Fee', 'Car Model'];

  customers: Customer[] = [];
  selectedCustomer = new FormControl<Customer | null>(null);
  customerBookings = this.bookingService.customerBookings;

  isBookingLoading$ = combineLatest([this.bookingService.bookings, this.vehicleService.vehicles]).pipe(
    LoadingState.anyIsLoading()
  );

  bookings$ = combineLatest([
    this.bookingService.customerBookings,
    this.vehicleService.vehicles$,
    this.isBookingLoading$,
  ]).pipe(
    skipWhile(([_, __, isBookingLoading]) => isBookingLoading),
    map(([bookings, vehicles, isLoading]) => {
      console.log('isLoading', isLoading);
      return bookings.map((booking: any) => {
        const bookedVehicle = vehicles.find((vehicle) => vehicle.id === booking.vehicleId);
        console.log('bookedVehicle', bookedVehicle);
        return { ...booking, bookedVehicle };
      });
    })
  );

  constructor(private bookingService: BookingService, private vehicleService: VehicleService) {}

  ngOnInit() {
    this.selectedCustomer.valueChanges.subscribe((customer) => {
      this.bookingService.setCurrentCustomer(customer);
      this.vehicleService.getVehicles();
      this.bookingService.getCustomerBookings(customer);
    });

    this.bookingService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
