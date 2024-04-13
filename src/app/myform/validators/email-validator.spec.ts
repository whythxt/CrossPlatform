import { AbstractControl } from '@angular/forms';
import { emailValidator } from './email-validator';

describe('emailValidator', () => {
  it('should return null if email is valid', () => {
    const control = { value: 'example@example.com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toBeNull();
  });

  it('should return { invalidEmail: true } if email is invalid', () => {
    const control = { value: 'invalidemail.com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toEqual({ invalidEmail: true });
  });

  it('should return null if email is empty', () => {
    const control = { value: '' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toBeNull();
  });

  it('should return null if email contains "@" in the middle', () => {
    const control = { value: 'example@com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toBeNull();
  });

  it('should return null if email contains multiple "@" symbols', () => {
    const control = { value: 'example@example@com' } as AbstractControl;
    const result = emailValidator()(control);
    expect(result).toBeNull();
  });
});
