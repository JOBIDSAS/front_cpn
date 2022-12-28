import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuadeloupeComponent } from './guadeloupe.component';

describe('GuadeloupeComponent', () => {
  let component: GuadeloupeComponent;
  let fixture: ComponentFixture<GuadeloupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuadeloupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuadeloupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
