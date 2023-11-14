import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationMenuComponent } from './pagination-menu.component';

describe('PaginationMenuComponent', () => {
  let component: PaginationMenuComponent;
  let fixture: ComponentFixture<PaginationMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationMenuComponent]
    });
    fixture = TestBed.createComponent(PaginationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
