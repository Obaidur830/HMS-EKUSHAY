import { TestBed } from '@angular/core/testing';

import { ResidentialStudentService } from './residential-student.service';

describe('ResidentialStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentialStudentService = TestBed.get(ResidentialStudentService);
    expect(service).toBeTruthy();
  });
});
