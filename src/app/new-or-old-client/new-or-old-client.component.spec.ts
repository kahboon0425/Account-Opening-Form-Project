import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrOldClientComponent } from './new-or-old-client.component';

describe('NewOrOldClientComponent', () => {
  let component: NewOrOldClientComponent;
  let fixture: ComponentFixture<NewOrOldClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrOldClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrOldClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
