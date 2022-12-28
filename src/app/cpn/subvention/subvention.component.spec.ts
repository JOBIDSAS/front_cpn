import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionComponent } from './subvention.component';

describe('SubventionComponent', () => {
  let component: SubventionComponent;
  let fixture: ComponentFixture<SubventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
