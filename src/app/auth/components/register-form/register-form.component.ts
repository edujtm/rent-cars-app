import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppValidators } from 'src/app/core/utils/validators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Output() submit = new EventEmitter<RegisterFormData>();

  submitErrors: string | null = null;

  /*
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  */

  registerForm = this.formBuilder.group({
    firstName: ['', [AppValidators.required('First name')]],
    lastName: ['', [AppValidators.required('Last name')]],
    username: ['', [AppValidators.required('Username')]],
    password: ['', [AppValidators.required('Password')]],
    email: ['', [AppValidators.required('Email'), AppValidators.email]],
    phoneNumber: ['', [AppValidators.required('Phone number')]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

  onSubmit() {
    const values = this.registerForm.value as RegisterFormData;

    this.authService.registerUser(values).subscribe({
      next: (_) => {
        this.router.navigate(['../']);
      },
      error: (err) => {
        this.submitErrors = 'Something wrong occurred while registering account';
      },
    });
  }
}
