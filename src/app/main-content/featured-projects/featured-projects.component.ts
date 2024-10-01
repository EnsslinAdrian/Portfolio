import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { JoinPopupComponent } from './join-popup/join-popup.component';
import { JetFirePopupComponent } from './jet-fire-popup/jet-fire-popup.component';
import { InstagramPopupComponent } from './instagram-popup/instagram-popup.component';


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, JoinPopupComponent, JetFirePopupComponent, InstagramPopupComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  showJoin: boolean = false;
  showGame: boolean = false;
  showBubble: boolean = false;

  @Input() openJoinPopup: boolean = false;
  @Input() openJetFirePopup: boolean = false;
  @Input() openInstagramPopup: boolean = false;

  constructor(private renderer: Renderer2) {}

  openProjectJoin() {
   this.openJoinPopup = true;
   this.renderer.setStyle(document.body, 'overflow', 'hidden')
  }

  openProjectJetFire() {
   this.openJetFirePopup = true;
   this.renderer.setStyle(document.body, 'overflow', 'hidden')
  }

  openProjectInstagram() {
   this.openInstagramPopup = true;
   this.renderer.setStyle(document.body, 'overflow', 'hidden')
  }

  handleClosePopup() {
    this.openJoinPopup = false;
    this.openJetFirePopup = false;
    this.openInstagramPopup = false;
    this.renderer.removeStyle(document.body, 'overflow');
  }

}
