import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoadingState } from 'src/app/core/utils/custom-operators';
import { Load, Loadable } from 'src/app/core/utils/loadable';
import { Store } from 'src/app/core/utils/store';
import { environment } from 'src/environments/environment';

export interface Vehicle {
  id: number;
  model: string;
  manufacturer: string;
  mileage: string;
  dailyRentalFee: number;
}

interface VehicleState {
  vehicles: Loadable<Vehicle[]>;
  isLoading: boolean;
}

const INITIAL_STATE: VehicleState = {
  vehicles: Load.start(),
  isLoading: true,
};

@Injectable()
export class VehicleService extends Store<VehicleState> {
  readonly vehicles = this.select((state) => state.vehicles);

  vehicles$ = this.vehicles.pipe<Vehicle[]>(LoadingState.retrieveData());
  isVehiclesLoading = this.vehicles.pipe(LoadingState.isCurrentlyLoading());

  constructor(private http: HttpClient) {
    super(INITIAL_STATE);
  }

  public getVehicles() {
    this.update({ vehicles: Load.start() });
    this.http.get<Vehicle[]>(`${environment.apiUrl}/vehicles`).subscribe((vehicles) => {
      this.update({ vehicles: Load.successful(vehicles) });
    });
  }
}
