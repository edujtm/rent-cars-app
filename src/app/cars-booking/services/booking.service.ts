import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, filter, map, Observable, of, skip, skipWhile, switchMap } from 'rxjs';
import { LoadingState } from 'src/app/core/utils/custom-operators';
import { assertIsLoaded, Load, Loadable, Loading } from 'src/app/core/utils/loadable';
import { Store } from 'src/app/core/utils/store';
import { environment } from 'src/environments/environment';

export interface Customer {
  Id: string;
  Email: string;
  Name: string;
  Address: string;
  Age: number;
}

interface BookingState {
  bookings: Loadable<any[]>;
  customer: Customer | null;
}

const INITIAL_STATE: BookingState = {
  customer: null,
  bookings: Load.start(),
};

@Injectable()
export class BookingService extends Store<BookingState> {
  currentCustomer = this.select((state) => state.customer);
  readonly bookings = this.select((state) => state.bookings);

  readonly customerBookings: Observable<any[]> = this.bookings.pipe(LoadingState.retrieveData());

  readonly isBookingLoading = this.bookings.pipe(LoadingState.isCurrentlyLoading());

  readonly errors$ = this.bookings.pipe(LoadingState.retrieveErrors());

  constructor(private http: HttpClient) {
    super(INITIAL_STATE);
  }

  public setCurrentCustomer(customer: Customer | null) {
    this.update({ customer });
  }

  public getCustomerBookings(customer: Customer | null) {
    if (customer === null) {
      this.update({ bookings: Load.successful([]) });
      return;
    }

    this.update({ bookings: Load.start() });
    this.http.get<any[]>(`${environment.apiUrl}/customers/${customer.Id}/bookings`).subscribe({
      next: (bookings) => {
        this.update({ bookings: Load.successful(bookings) });
      },
      error: (err) => this.update({ bookings: Load.error(err) }),
    });
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/customers/`);
  }

  public addBooking(booking: any) {
    this.update((state) => {
      return {
        state,
        bookings: Load.updateIfLoaded(state.bookings, (bookings) => [...bookings, booking]),
      };
    });
  }
}
