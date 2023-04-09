import { Component } from '@angular/core';
import { RegisterFormData } from './components/register-form/register-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rent-cars-app';

  onLogin() {
    console.log('Login form was submitted');
  }

  onRegister(formData: RegisterFormData) {
    console.log('Register form was submitted', formData);
  }
}
