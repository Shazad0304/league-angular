import { TestBed } from '@angular/core/testing';

import { TeampickerService } from './teampicker.service';

describe('TeampickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeampickerService = TestBed.get(TeampickerService);
    expect(service).toBeTruthy();
  });
});
