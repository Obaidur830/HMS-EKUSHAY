import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatApplicationDetailComponent } from './seat-application-detail.component';

describe('SeatApplicationDetailComponent', () => {
  let component: SeatApplicationDetailComponent;
  let fixture: ComponentFixture<SeatApplicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatApplicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
