import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIntervenantComponent } from './detail-intervenant.component';

describe('DetailIntervenantComponent', () => {
  let component: DetailIntervenantComponent;
  let fixture: ComponentFixture<DetailIntervenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIntervenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
