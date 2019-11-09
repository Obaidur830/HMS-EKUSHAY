import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtibedonListComponent } from './protibedon-list.component';

describe('ProtibedonListComponent', () => {
  let component: ProtibedonListComponent;
  let fixture: ComponentFixture<ProtibedonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtibedonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtibedonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
