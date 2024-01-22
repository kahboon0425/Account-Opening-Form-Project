import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOrBusinessPartnerComponent } from './employee-or-business-partner.component';

describe('EmployeeOrBusinessPartnerComponent', () => {
  let component: EmployeeOrBusinessPartnerComponent;
  let fixture: ComponentFixture<EmployeeOrBusinessPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOrBusinessPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOrBusinessPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
