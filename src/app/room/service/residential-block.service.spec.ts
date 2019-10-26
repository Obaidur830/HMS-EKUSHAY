import { TestBed } from '@angular/core/testing';

import { ResidentialBlockService } from './residential-block.service';

describe('ResidentialBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentialBlockService = TestBed.get(ResidentialBlockService);
    expect(service).toBeTruthy();
  });
});
