import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTagsComponent } from './ajout-tags.component';

describe('AjoutTagsComponent', () => {
  let component: AjoutTagsComponent;
  let fixture: ComponentFixture<AjoutTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
