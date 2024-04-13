import { FormControl } from '@angular/forms';
import { NumberValidator } from './number-validator';

describe('NumberValidator', () => {
  it('should return null if phone number is valid', () => {
    const control = new FormControl('12345678');
    const result = NumberValidator.isValidPhone(control);
    expect(result).toBeNull();
  });

  it('should return { invalidPhone: true } if phone number is invalid', () => {
    const control = new FormControl('12345');
    const result = NumberValidator.isValidPhone(control);
    expect(result).toEqual({ invalidPhone: true });
  });

  it('should return null if phone number is empty', () => {
    const control = new FormControl('');
    const result = NumberValidator.isValidPhone(control);
    expect(result).toBeNull();
  });

  it('should return null if phone number contains non-numeric characters', () => {
    const control = new FormControl('12-345-678');
    const result = NumberValidator.isValidPhone(control);
    expect(result).toBeNull();
  });
});
