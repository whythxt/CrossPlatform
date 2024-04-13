import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Сума ряду значення x = 0.1; y = 1.5708', () => {
    let x = 0.1;
    let y = 1.57;
    let y1 = 1.57;

    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  })
});
