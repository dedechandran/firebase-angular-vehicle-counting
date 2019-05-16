import { TestBed } from '@angular/core/testing';

import { FormCountingService } from './form-counting.service';

describe('FormCountingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormCountingService = TestBed.get(FormCountingService);
    expect(service).toBeTruthy();
  });
});
