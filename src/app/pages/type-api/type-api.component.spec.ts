import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeApiComponent } from './type-api.component';

describe('TypeApiComponent', () => {
  let component: TypeApiComponent;
  let fixture: ComponentFixture<TypeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
