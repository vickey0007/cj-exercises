import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaltimeComponent } from './intervaltime.component';

describe('IntervaltimeComponent', () => {
  let component: IntervaltimeComponent;
  let fixture: ComponentFixture<IntervaltimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervaltimeComponent]
    });
    fixture = TestBed.createComponent(IntervaltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
