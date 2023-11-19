import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEpisodeAllInfoComponent } from './single-episode-all-info.component';

describe('SingleEpisodeAllInfoComponent', () => {
  let component: SingleEpisodeAllInfoComponent;
  let fixture: ComponentFixture<SingleEpisodeAllInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEpisodeAllInfoComponent]
    });
    fixture = TestBed.createComponent(SingleEpisodeAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
