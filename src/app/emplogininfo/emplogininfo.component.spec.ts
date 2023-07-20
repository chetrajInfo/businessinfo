import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplogininfoComponent } from './emplogininfo.component';

describe('EmplogininfoComponent', () => {
  let component: EmplogininfoComponent;
  let fixture: ComponentFixture<EmplogininfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplogininfoComponent]
    });
    fixture = TestBed.createComponent(EmplogininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
