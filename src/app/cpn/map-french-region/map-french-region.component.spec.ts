import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFrenchRegionComponent } from './map-french-region.component';

describe('MapFrenchRegionComponent', () => {
  let component: MapFrenchRegionComponent;
  let fixture: ComponentFixture<MapFrenchRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFrenchRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFrenchRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
