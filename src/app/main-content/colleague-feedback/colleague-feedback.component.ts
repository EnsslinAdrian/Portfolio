import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colleague-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleague-feedback.component.html',
  styleUrl: './colleague-feedback.component.scss'
})
export class ColleagueFeedbackComponent {

  slides = [1, 2, 3]; // Hier kannst du deine tatsächlichen Inhalte einfügen
  currentSlide = 1; // Starten mit dem mittleren Slide, um dein ursprüngliches Verhalten zu imitieren

  imgBack() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1; // Zurück zum letzten Slide
    }
  }

  imgForward() {
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0; // Zurück zum ersten Slide
    }
  }

  getTransform(index: number): string {
    const position = index - this.currentSlide;

    if (position === 0) {
      return 'translateX(0%) scale(1.2)';
    } else if (position === 1 || (position === -2 && this.slides.length === 3)) {
      return 'translateX(130%)';
    } else if (position === -1 || (position === 2 && this.slides.length === 3)) {
      return 'translateX(-130%)';
    } else if (position === 2 || (position === -1 && this.slides.length === 3)) {
      return 'translateX(230%)';
    } else if (position === -2 || (position === 1 && this.slides.length === 3)) {
      return 'translateX(-230%)';
    } else {
      return '';
    }
  }

  getPointColor(index: number): string {
    return index === this.currentSlide ? '#3DCFB6' : '';
  }


}
