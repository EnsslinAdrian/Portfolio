import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPopupComponent } from './instagram-popup.component';

describe('InstagramPopupComponent', () => {
  let component: InstagramPopupComponent;
  let fixture: ComponentFixture<InstagramPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
