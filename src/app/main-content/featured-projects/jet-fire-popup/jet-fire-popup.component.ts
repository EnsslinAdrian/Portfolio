import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jet-fire-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jet-fire-popup.component.html',
  styleUrl: './jet-fire-popup.component.scss'
})
export class JetFirePopupComponent {
  @Input() openJetFirePopup: boolean = false;
  @Output() closePopupEvent = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  closePopup() {
    this.openJetFirePopup = false;
    this.renderer.removeStyle(document.body, 'overflow');
    this.closePopupEvent.emit();
  }
}
