import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAccountingPageComponent } from './default-accounting-page.component';

describe('DefaultAccountingPageComponent', () => {
  let component: DefaultAccountingPageComponent;
  let fixture: ComponentFixture<DefaultAccountingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultAccountingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAccountingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
