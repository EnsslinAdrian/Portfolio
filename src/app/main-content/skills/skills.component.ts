import { Component, OnInit } from '@angular/core';
import { SkillIconsComponent } from "./skill-icons/skill-icons.component";
import { SkillTextComponent } from "./skill-text/skill-text.component";
import { VariablenService } from '../../../services/variablen.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconsComponent, SkillTextComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{
  language: boolean = true;

  constructor(private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }
}
