import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApiComponent } from './detail-api.component';

describe('DetailApiComponent', () => {
  let component: DetailApiComponent;
  let fixture: ComponentFixture<DetailApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
