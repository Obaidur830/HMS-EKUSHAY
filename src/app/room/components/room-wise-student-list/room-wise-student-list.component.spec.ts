import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWiseStudentListComponent } from './room-wise-student-list.component';

describe('RoomWiseStudentListComponent', () => {
  let component: RoomWiseStudentListComponent;
  let fixture: ComponentFixture<RoomWiseStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomWiseStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWiseStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
