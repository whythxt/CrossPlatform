import { FormControl } from '@angular/forms';

export class NumberValidator {
  static isValidPhone(control: FormControl) {
    const phonePattern = /^[0-9]{8}$/;
    const isValid = phonePattern.test(control.value);
    return isValid ? null : { invalidPhone: true };
  }

  static isValidEmail(control: FormControl) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { invalidEmail: true };
  }
}
