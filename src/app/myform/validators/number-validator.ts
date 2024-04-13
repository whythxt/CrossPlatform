import { FormControl } from '@angular/forms';

export class NumberValidator {
  static isValidPhone(control: FormControl) {
    const phonePattern = /^[0-9]{8}$/;
    const isValid = phonePattern.test(control.value);
    return isValid ? null : { invalidPhone: true };
  }
}
