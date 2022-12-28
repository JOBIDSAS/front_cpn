import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreSuccesComponent } from './notre-succes.component';

describe('NotreSuccesComponent', () => {
  let component: NotreSuccesComponent;
  let fixture: ComponentFixture<NotreSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotreSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
