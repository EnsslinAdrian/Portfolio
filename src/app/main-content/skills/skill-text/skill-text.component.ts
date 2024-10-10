import { Component, OnInit } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';

@Component({
  selector: 'app-skill-text',
  standalone: true,
  imports: [],
  templateUrl: './skill-text.component.html',
  styleUrl: './skill-text.component.scss'
})
export class SkillTextComponent  implements OnInit{
  language: boolean = true;

  descriptionE: string = 'My journey has involved working on diverse projects, employing a range of Fullstack technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.';
  descriptionDe: string = ' Meine Reise hat mich dazu geführt, an vielfältigen Projekten zu arbeiten und eine Reihe von Fullstack-Technologien und Konzepten einzusetzen. Ich bin offen dafür, neue Technologien und Methoden zu übernehmen, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Welt der Webentwicklung voraus zu sein.';

  contactMeE: string = 'Feel free to contact me. I look forward to expanding on my previous knowledge.';
  contactMeDe: string = 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.';

  constructor(private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  contact() {
    location.href = '#contact';
  }
}
