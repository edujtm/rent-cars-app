import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-cars-booking-page',
  templateUrl: './cars-booking-page.component.html',
  styleUrls: ['./cars-booking-page.component.scss'],
})
export class CarsBookingPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['auth']);
  }
}
