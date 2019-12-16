import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatApplicationDetailsComponent } from './seat-application-details.component';

describe('SeatApplicationDetailsComponent', () => {
  let component: SeatApplicationDetailsComponent;
  let fixture: ComponentFixture<SeatApplicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatApplicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
