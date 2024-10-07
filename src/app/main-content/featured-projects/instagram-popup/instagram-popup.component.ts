import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';

@Component({
  selector: 'app-instagram-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-popup.component.html',
  styleUrl: './instagram-popup.component.scss'
})
export class InstagramPopupComponent implements OnInit{
  @Input() openInstagramPopup: boolean = false;
  @Output() closePopupEvent = new EventEmitter<void>();
  @Output() openNextProject = new EventEmitter<void>();

  language: boolean = true;

  whatIsQuestionDe: string = 'Worum geht es in diesem Projekt?';
  whatIsQuestionE: string = 'What is this project about?';

  descriptionDe: string = 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.';
  descriptionE: string = 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assignusers and categories';

  liveTestDe: string = 'Live testen'
  liveTestE: string = 'Live Test'

  nextProjectDe: string = 'Nächstes Projekt';
  nextProjectE: string = 'Next project';

  constructor(private renderer: Renderer2, private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
        this.language = language;
    })
  }

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

  githubInstagram() {
    location.href = 'https://github.com/EnsslinAdrian/Instagram';
  }

  showInstagram() {
    location.href = 'https://adrian-ensslin.developerakademie.net/Instagram/index.html';
  }

}
