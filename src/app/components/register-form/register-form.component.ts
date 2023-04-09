import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Input() title?: string;
  @Output() submit = new EventEmitter<void>();

  onSubmit() {
    this.submit.next();
  }
}
