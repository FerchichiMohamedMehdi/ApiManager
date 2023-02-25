import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutApiComponent } from './ajout-api.component';

describe('AjoutApiComponent', () => {
  let component: AjoutApiComponent;
  let fixture: ComponentFixture<AjoutApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
