import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoryTextComponent } from './my-story-text.component';

describe('MyStoryTextComponent', () => {
  let component: MyStoryTextComponent;
  let fixture: ComponentFixture<MyStoryTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStoryTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStoryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
