import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorseComponent } from './corse.component';

describe('CorseComponent', () => {
  let component: CorseComponent;
  let fixture: ComponentFixture<CorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
