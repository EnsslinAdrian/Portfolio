import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { JoinPopupComponent } from './join-popup/join-popup.component';
import { JetFirePopupComponent } from './jet-fire-popup/jet-fire-popup.component';
import { InstagramPopupComponent } from './instagram-popup/instagram-popup.component';
import { VariablenService } from '../../../services/variablen.service';


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, JoinPopupComponent, JetFirePopupComponent, InstagramPopupComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent implements OnInit{
  showJoin: boolean = false;
  showGame: boolean = false;
  showBubble: boolean = false;

  @Input() openJoinPopup: boolean = false;
  @Input() openJetFirePopup: boolean = false;
  @Input() openInstagramPopup: boolean = false;

  language: boolean = true;

  descriptionE: string = 'Explore a selection of my work here - Interact with projects to see my skills in action.';
  descriptionDe: string = 'Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.';

  constructor(private renderer: Renderer2, private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

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
  }

  openJetFire() {
    this.openJetFirePopup = true;
  }

  openInstagram() {
    this.openInstagramPopup = true;
  }

  openJoin() {
    this.openJoinPopup = true;
  }

  

}
