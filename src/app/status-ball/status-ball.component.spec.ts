import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBallComponent } from './status-ball.component';

describe('StatusBallComponent', () => {
  let component: StatusBallComponent;
  let fixture: ComponentFixture<StatusBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusBallComponent]
    });
    fixture = TestBed.createComponent(StatusBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
