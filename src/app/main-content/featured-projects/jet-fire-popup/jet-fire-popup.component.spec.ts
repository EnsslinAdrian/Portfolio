import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetFirePopupComponent } from './jet-fire-popup.component';

describe('JetFirePopupComponent', () => {
  let component: JetFirePopupComponent;
  let fixture: ComponentFixture<JetFirePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JetFirePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JetFirePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
