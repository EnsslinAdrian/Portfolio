import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueFeedbackComponent } from './colleague-feedback.component';

describe('ColleagueFeedbackComponent', () => {
  let component: ColleagueFeedbackComponent;
  let fixture: ComponentFixture<ColleagueFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleagueFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleagueFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
