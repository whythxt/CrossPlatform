import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailPattern = /@/;
    const isValid = emailPattern.test(control.value);
    return isValid ? null : { invalidEmail: true };
  };
}
