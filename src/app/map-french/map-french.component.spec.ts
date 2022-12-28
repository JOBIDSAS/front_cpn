import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFrenchComponent } from './map-french.component';

describe('MapFrenchComponent', () => {
  let component: MapFrenchComponent;
  let fixture: ComponentFixture<MapFrenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFrenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
