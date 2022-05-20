import { TestBed } from '@angular/core/testing';

import { RestrictSignInGuard } from './restrict-sign-in.guard';

describe('RestrictSignInGuard', () => {
  let guard: RestrictSignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestrictSignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
