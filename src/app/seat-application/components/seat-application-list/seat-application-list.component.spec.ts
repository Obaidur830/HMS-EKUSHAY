import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatApplicationListComponent } from './seat-application-list.component';

describe('SeatApplicationListComponent', () => {
  let component: SeatApplicationListComponent;
  let fixture: ComponentFixture<SeatApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
