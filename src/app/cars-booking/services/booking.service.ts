import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Customer {
  Id: string;
  Email: string;
  Name: string;
  Address: string;
  Age: number;
}

@Injectable()
export class BookingService {
  private _currentCustomer = new BehaviorSubject<Customer | null>(null);
  currentCustomer = this._currentCustomer.asObservable();

  customerBookings = this.currentCustomer.pipe(switchMap((customer) => this.getCustomerBookings(customer)));

  constructor(private http: HttpClient) {}

  public setCurrentCustomer(customer: Customer | null) {
    this._currentCustomer.next(customer);
  }

  public getCustomerBookings(customer: Customer | null): Observable<any> {
    if (customer === null) {
      return of([]);
    }

    return this.http.get(`${environment.apiUrl}/customers/${customer.Id}/bookings`);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/customers/`);
  }
}
