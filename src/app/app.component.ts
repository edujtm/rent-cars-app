import { Component } from '@angular/core';
import { LoginFormData } from './auth/components/login-form/login-form.component';
import { RegisterFormData } from './auth/components/register-form/register-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rent-cars-app';
}
