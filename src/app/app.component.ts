import { Component } from '@angular/core';
import { LoginFormData } from './components/login-form/login-form.component';
import { RegisterFormData } from './components/register-form/register-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rent-cars-app';

  onLogin(loginData: LoginFormData) {
    console.log('Login form was submitted', loginData);
  }

  onRegister(formData: RegisterFormData) {
    console.log('Register form was submitted', formData);
  }
}
