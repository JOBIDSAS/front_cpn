import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IledefranceComponent } from './iledefrance.component';

describe('IledefranceComponent', () => {
  let component: IledefranceComponent;
  let fixture: ComponentFixture<IledefranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IledefranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IledefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
