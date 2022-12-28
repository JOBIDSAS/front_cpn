import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormandieComponent } from './normandie.component';

describe('NormandieComponent', () => {
  let component: NormandieComponent;
  let fixture: ComponentFixture<NormandieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormandieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormandieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
