import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpscheduleComponent } from './empschedule.component';

describe('EmpscheduleComponent', () => {
  let component: EmpscheduleComponent;
  let fixture: ComponentFixture<EmpscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpscheduleComponent]
    });
    fixture = TestBed.createComponent(EmpscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
