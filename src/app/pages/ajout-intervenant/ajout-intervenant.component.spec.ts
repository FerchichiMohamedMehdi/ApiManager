import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutIntervenantComponent } from './ajout-intervenant.component';

describe('AjoutIntervenantComponent', () => {
  let component: AjoutIntervenantComponent;
  let fixture: ComponentFixture<AjoutIntervenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutIntervenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
