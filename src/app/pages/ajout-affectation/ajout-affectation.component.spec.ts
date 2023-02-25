import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAffectationComponent } from './ajout-affectation.component';

describe('AjoutAffectationComponent', () => {
  let component: AjoutAffectationComponent;
  let fixture: ComponentFixture<AjoutAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAffectationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
