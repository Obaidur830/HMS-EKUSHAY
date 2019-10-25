import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultResidencePageComponent } from './default-residence-page.component';

describe('DefaultResidencePageComponent', () => {
  let component: DefaultResidencePageComponent;
  let fixture: ComponentFixture<DefaultResidencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultResidencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultResidencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
