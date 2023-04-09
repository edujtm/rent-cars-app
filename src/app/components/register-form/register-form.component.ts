import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

const emailValidator = (control: AbstractControl): ValidationErrors | null => {
  if (typeof control.value !== 'string') {
    return { valueIsNotString: 'Email is invalid' };
  }

  const email = control.value as string;
  if (!email.includes('@')) {
    return { missingAtChar: 'Email is invalid' };
  }

  return null;
};

const phoneValidator = (control: AbstractControl): ValidationErrors | null => {
  if (typeof control.value !== 'string') {
    return { valueIsNotString: 'Phone is invalid' };
  }

  const phone = control.value as string;
  if (phone.length !== 14) {
    return { incompletePhoneNumber: 'Phone number is incomplete' };
  }

  return null;
};

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Input() title: string = '';
  @Output() submit = new EventEmitter<void>();

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

  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, emailValidator]],
    phoneNumber: ['', [phoneValidator]],
  });

  submitError: string | null = null;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('form: ', this.registerForm);
    this.submit.next();
  }
}
