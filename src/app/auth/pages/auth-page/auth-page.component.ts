import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormData } from '../../components/login-form/login-form.component';
import { RegisterFormData } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  constructor(private router: Router) {}

  onLogin(loginData: LoginFormData) {
    console.log('Login form was submitted', loginData);
    this.router.navigate(['/bookings']);
  }

  onRegister(formData: RegisterFormData) {
    console.log('Register form was submitted', formData);
  }
}
