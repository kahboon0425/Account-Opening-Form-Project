import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatcaStatusComponent } from './fatca-status.component';

describe('FatcaStatusComponent', () => {
  let component: FatcaStatusComponent;
  let fixture: ComponentFixture<FatcaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatcaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatcaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
