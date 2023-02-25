import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntervenantsComponent } from './list-intervenants.component';

describe('ListIntervenantsComponent', () => {
  let component: ListIntervenantsComponent;
  let fixture: ComponentFixture<ListIntervenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIntervenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIntervenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
