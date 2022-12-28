import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayedeloireComponent } from './payedeloire.component';

describe('PayedeloireComponent', () => {
  let component: PayedeloireComponent;
  let fixture: ComponentFixture<PayedeloireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayedeloireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayedeloireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
