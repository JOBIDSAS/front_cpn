import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiviteterritorialemartiniqueComponent } from './collectiviteterritorialemartinique.component';

describe('CollectiviteterritorialemartiniqueComponent', () => {
  let component: CollectiviteterritorialemartiniqueComponent;
  let fixture: ComponentFixture<CollectiviteterritorialemartiniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiviteterritorialemartiniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiviteterritorialemartiniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
