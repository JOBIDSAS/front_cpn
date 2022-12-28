import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassOublierComponent } from './pass-oublier.component';

describe('PassOublierComponent', () => {
  let component: PassOublierComponent;
  let fixture: ComponentFixture<PassOublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassOublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
