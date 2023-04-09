import { Component } from '@angular/core';

const FAKE_BOOKINGS = [
  {
    from: new Date(2020, 10, 1),
    to: new Date(2020, 11, 10),
    status: 'Currently rent',
    paymentReceived: false,
    totalFee: 10.0,
  },
  {
    from: new Date(2023, 1, 10),
    to: new Date(2023, 11, 1),
    status: 'Currently rent',
    paymentReceived: true,
    totalFee: 50.0,
  },
];

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
})
export class BookingTableComponent {
  readonly columns = ['Start Date', 'Final Date', 'Status', 'Payment Received', 'Fee'];

  bookings = FAKE_BOOKINGS;
}
