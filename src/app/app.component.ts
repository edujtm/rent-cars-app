import { Component } from '@angular/core';

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

  onRegister() {
    console.log('Register form was submitted');
  }
}
