import { TestBed } from '@angular/core/testing';

import { OlipageGuard } from './olipage.guard';

describe('OlipageGuard', () => {
  let guard: OlipageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OlipageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
