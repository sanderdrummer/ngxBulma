import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuModalComponent } from './bu-modal.component';

describe('BuModalComponent', () => {
  let component: BuModalComponent;
  let fixture: ComponentFixture<BuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
