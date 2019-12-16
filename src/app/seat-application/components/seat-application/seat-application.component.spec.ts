import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatApplicationComponent } from './seat-application.component';

describe('SeatApplicationComponent', () => {
  let component: SeatApplicationComponent;
  let fixture: ComponentFixture<SeatApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
