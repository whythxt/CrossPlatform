import { TestBed } from '@angular/core/testing';

import { DerivativeCalculatorService } from './derivative-calculator.service';

describe('DerivativeCalculatorService', () => {
  let service: DerivativeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerivativeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the derivative correctly', () => {
    const f = 'x * x';
    const x0 = 2;
    const h = 1;
    const expectedDerivative = 4;

    const derivative = service.calculateDerivative(f, x0, h);

    expect(derivative).toBeCloseTo(expectedDerivative, 2);
  });

  it('should return NaN for invalid function input', () => {
    const invalidFunction = '';
    const x0 = 0;
    const h = 0.1;

    const derivative = service.calculateDerivative(invalidFunction, x0, h);

    expect(isNaN(derivative)).toBe(true);
});

});
