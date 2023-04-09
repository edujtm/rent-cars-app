import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppValidators } from 'src/app/core/utils/validators';

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
  @Input() title?: string;
  @Output() submit = new EventEmitter<LoginFormData>();

  @Input() submitErrors: string | null = null;

  loginForm = this.formBuilder.group({
    username: ['', [AppValidators.required('Username')]],
    password: ['', [AppValidators.required('Password')]],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    const values = this.loginForm.value as LoginFormData;
    this.submit.next(values);
  }
}
