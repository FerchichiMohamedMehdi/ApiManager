import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIntervenantComponent } from './update-intervenant.component';

describe('UpdateIntervenantComponent', () => {
  let component: UpdateIntervenantComponent;
  let fixture: ComponentFixture<UpdateIntervenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIntervenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
