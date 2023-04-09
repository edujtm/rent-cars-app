import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from 'src/app/core/utils/validators';

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
  @Input() title?: string;
  @Output() submit = new EventEmitter<RegisterFormData>();

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

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    const values = this.registerForm.value as RegisterFormData;
    this.submit.next(values);
  }
}
