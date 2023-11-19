import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLocationAllInfoComponent } from './single-location-all-info.component';

describe('SingleLocationAllInfoComponent', () => {
  let component: SingleLocationAllInfoComponent;
  let fixture: ComponentFixture<SingleLocationAllInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleLocationAllInfoComponent]
    });
    fixture = TestBed.createComponent(SingleLocationAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
