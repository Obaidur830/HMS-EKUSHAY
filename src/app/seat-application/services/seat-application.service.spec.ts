import { TestBed } from '@angular/core/testing';

import { SeatApplicationService } from './seat-application.service';

describe('SeatApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatApplicationService = TestBed.get(SeatApplicationService);
    expect(service).toBeTruthy();
  });
});
