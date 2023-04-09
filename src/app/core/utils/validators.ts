import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
  static required(fieldName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null) {
        return { requiredFieldIsMissing: `${fieldName} is required` };
      }

      if (typeof control.value === 'string' && control.value.length === 0) {
        return { requiredFieldIsEmpty: `${fieldName} is required` };
      }
      return null;
    };
  }

  static email(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value !== 'string') {
      return { fieldIsNotString: 'Email is invalid' };
    }

    const email = control.value as string;
    if (!email.includes('@')) {
      return { missingAt: 'Email is invalid' };
    }
    return null;
  }
}
