import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptimesheetComponent } from './emptimesheet.component';

describe('EmptimesheetComponent', () => {
  let component: EmptimesheetComponent;
  let fixture: ComponentFixture<EmptimesheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptimesheetComponent]
    });
    fixture = TestBed.createComponent(EmptimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
