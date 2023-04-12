import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Vehicle {
  model: string;
  manufacturer: string;
  mileage: string;
  dailyRentalFee: number;
}

@Injectable()
export class VehicleService {
  private _vehicles = new BehaviorSubject<Vehicle[]>([]);
  vehicles = this._vehicles.asObservable();

  constructor(private http: HttpClient) {}

  public getVehicles() {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<Vehicle[]>(`${environment.apiUrl}/vehicles`, { headers }).subscribe((vehicles) => {
      this._vehicles.next(vehicles);
    });
  }
}
