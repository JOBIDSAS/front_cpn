import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuvergneComponent } from './auvergne.component';

describe('AuvergneComponent', () => {
  let component: AuvergneComponent;
  let fixture: ComponentFixture<AuvergneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuvergneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuvergneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
