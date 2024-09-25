import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProjectsComponent } from './popup-projects.component';

describe('PopupProjectsComponent', () => {
  let component: PopupProjectsComponent;
  let fixture: ComponentFixture<PopupProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
