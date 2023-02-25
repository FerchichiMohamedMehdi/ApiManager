import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApiCategoriesComponent } from './list-api-categories.component';

describe('ListApiCategoriesComponent', () => {
  let component: ListApiCategoriesComponent;
  let fixture: ComponentFixture<ListApiCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApiCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApiCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
