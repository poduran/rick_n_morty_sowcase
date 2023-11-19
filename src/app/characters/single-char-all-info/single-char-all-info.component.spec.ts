import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCharAllInfoComponent } from './single-char-all-info.component';

describe('SingleCharAllInfoComponent', () => {
  let component: SingleCharAllInfoComponent;
  let fixture: ComponentFixture<SingleCharAllInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCharAllInfoComponent]
    });
    fixture = TestBed.createComponent(SingleCharAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
