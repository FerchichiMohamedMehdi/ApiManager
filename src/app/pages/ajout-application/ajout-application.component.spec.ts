import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutApplicationComponent } from './ajout-application.component';

describe('AjoutApplicationComponent', () => {
  let component: AjoutApplicationComponent;
  let fixture: ComponentFixture<AjoutApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
