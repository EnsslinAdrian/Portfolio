import { Component } from '@angular/core';
import { SkillIconsComponent } from "./skill-icons/skill-icons.component";
import { SkillTextComponent } from "./skill-text/skill-text.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconsComponent, SkillTextComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
