import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';

@Component({
  selector: 'app-jet-fire-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jet-fire-popup.component.html',
  styleUrl: './jet-fire-popup.component.scss'
})
export class JetFirePopupComponent implements OnInit{
  @Input() openJetFirePopup: boolean = false;
  @Output() closePopupEvent = new EventEmitter<void>();
  @Output() openNextProject = new EventEmitter<void>();

  constructor(private renderer: Renderer2, private service: VariablenService) {}

  language: boolean = true;

  whatIsQuestionDe: string = 'Worum geht es in diesem Projekt?';
  whatIsQuestionE: string = 'What is this project about?';

  descriptionDe: string = 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.';
  descriptionE: string = 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assignusers and categories';

  liveTestDe: string = 'Live testen'
  liveTestE: string = 'Live Test'

  nextProjectDe: string = 'Nächstes Projekt';
  nextProjectE: string = 'Next project';


  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
        this.language = language;
    })
  }

  closePopup() {
    this.openJetFirePopup = false;
    this.renderer.removeStyle(document.body, 'overflow');
    this.closePopupEvent.emit();
  }

  nextProject() {
    this.openJetFirePopup = false;
    this.closePopupEvent.emit();
    this.openNextProject.emit();
  }

  showGame() {
    window.open('https://adrian-ensslin.developerakademie.net/JetFire/index.html', '_blank');
  }

  githubGame() {
    window.open('https://github.com/EnsslinAdrian/JetFire', '_blank');
  }

}
