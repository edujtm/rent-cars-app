import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppValidators } from 'src/app/core/utils/validators';
import { environment } from 'src/environments/environment';

export interface LoginFormData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<LoginFormData>();

  submitErrors: string | null = null;

  loginForm = this.formBuilder.group({
    username: ['', [AppValidators.required('Username')]],
    password: ['', [AppValidators.required('Password')]],
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  onSubmit() {
    const { username, password } = this.loginForm.value as LoginFormData;
    const body = { password, userName: username };

    this.http.post(`${environment.apiUrl}/authentication/login`, body).subscribe({
      next: (data) => {
        console.log('response: ', data);
        this.router.navigate(['/bookings']);
      },
      error: (err) => {
        this.submitErrors = 'Something wrong ocurred while logging in';
      },
    });
  }
}
