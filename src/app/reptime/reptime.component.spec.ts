import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptimeComponent } from './reptime.component';

describe('ReptimeComponent', () => {
  let component: ReptimeComponent;
  let fixture: ComponentFixture<ReptimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReptimeComponent]
    });
    fixture = TestBed.createComponent(ReptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
