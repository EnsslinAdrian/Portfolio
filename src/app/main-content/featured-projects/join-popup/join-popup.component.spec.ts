import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPopupComponent } from './join-popup.component';

describe('JoinPopupComponent', () => {
  let component: JoinPopupComponent;
  let fixture: ComponentFixture<JoinPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
