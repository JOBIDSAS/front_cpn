import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleaquantineComponent } from './nouvelleaquantine.component';

describe('NouvelleaquantineComponent', () => {
  let component: NouvelleaquantineComponent;
  let fixture: ComponentFixture<NouvelleaquantineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleaquantineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleaquantineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
