import { Component } from '@angular/core';
import { LoginFormData } from '../../components/login-form/login-form.component';
import { RegisterFormData } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  onLogin(loginData: LoginFormData) {
    console.log('Login form was submitted', loginData);
  }

  onRegister(formData: RegisterFormData) {
    console.log('Register form was submitted', formData);
  }
}
