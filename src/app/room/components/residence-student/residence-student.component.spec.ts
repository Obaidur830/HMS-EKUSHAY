import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceStudentComponent } from './residence-student.component';

describe('ResidenceStudentComponent', () => {
  let component: ResidenceStudentComponent;
  let fixture: ComponentFixture<ResidenceStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
