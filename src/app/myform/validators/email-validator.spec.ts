import { AbstractControl } from '@angular/forms';
import { emailValidator } from './email-validator';

describe('emailValidator', () => {
  fit('should return null if email is valid', () => {
    const control = { value: 'example@example.com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toBeNull();
  });

  fit('should return { invalidEmail: true } if email is invalid', () => {
    const control = { value: 'invalidemail.com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toEqual({ invalidEmail: true });
  });

  fit('should return { invalidEmail: true } if email is empty', () => {
    const control = { value: '' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toEqual({ invalidEmail: true });
  });

  fit('should return true if email does not contain "."', () => {
    const control = { value: 'example@com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toEqual({ invalidEmail: true });
  });

  fit('should return true if email contains multiple "@" symbols', () => {
    const control = { value: 'example@example@com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toEqual({ invalidEmail: true });
  });
});


