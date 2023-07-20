import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribepageComponent } from './subscribepage.component';

describe('SubscribepageComponent', () => {
  let component: SubscribepageComponent;
  let fixture: ComponentFixture<SubscribepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribepageComponent]
    });
    fixture = TestBed.createComponent(SubscribepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
