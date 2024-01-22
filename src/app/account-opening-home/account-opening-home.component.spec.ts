import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpeningHomeComponent } from './account-opening-home.component';

describe('AccountOpeningHomeComponent', () => {
  let component: AccountOpeningHomeComponent;
  let fixture: ComponentFixture<AccountOpeningHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOpeningHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpeningHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
