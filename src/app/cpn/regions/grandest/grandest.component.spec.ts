import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandestComponent } from './grandest.component';

describe('GrandestComponent', () => {
  let component: GrandestComponent;
  let fixture: ComponentFixture<GrandestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
