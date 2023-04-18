import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent {
  readonly columns = ['Model', 'Manufacturer', 'Mileage', 'Rental Fee'];

  vehicles$ = this.vehicleService.vehicles$;

  constructor(private authService: AuthService, private router: Router, private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['auth']);
  }
}
