import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiviteComponent } from './collectivite.component';

describe('CollectiviteComponent', () => {
  let component: CollectiviteComponent;
  let fixture: ComponentFixture<CollectiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
