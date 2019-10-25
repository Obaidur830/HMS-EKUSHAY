import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceStudentListComponent } from './residence-student-list.component';

describe('ResidenceStudentListComponent', () => {
  let component: ResidenceStudentListComponent;
  let fixture: ComponentFixture<ResidenceStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
