import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometpepmeComponent } from './hometpepme.component';

describe('HometpepmeComponent', () => {
  let component: HometpepmeComponent;
  let fixture: ComponentFixture<HometpepmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometpepmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometpepmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
