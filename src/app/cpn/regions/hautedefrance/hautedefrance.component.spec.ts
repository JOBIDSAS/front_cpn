import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HautedefranceComponent } from './hautedefrance.component';

describe('HautedefranceComponent', () => {
  let component: HautedefranceComponent;
  let fixture: ComponentFixture<HautedefranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HautedefranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HautedefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
