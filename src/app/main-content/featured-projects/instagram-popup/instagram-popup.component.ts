import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-instagram-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-popup.component.html',
  styleUrl: './instagram-popup.component.scss'
})
export class InstagramPopupComponent {
  @Input() openInstagramPopup: boolean = false;
  @Output() closePopupEvent = new EventEmitter<void>();
  @Output() openNextProject = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  closePopup() {
    this.openInstagramPopup = false;
    this.renderer.removeStyle(document.body, 'overflow');
    this.closePopupEvent.emit();
  }

  nextProject() {
    this.openInstagramPopup = false;
    this.closePopupEvent.emit();
    this.openNextProject.emit();
  }

}
