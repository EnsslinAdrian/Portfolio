import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icons.component.html',
  styleUrl: './skill-icons.component.scss'
})
export class SkillIconsComponent {

skill_images: string[] = [
  '/images/skills/html.png',
  '/images/skills/css.png',
  '/images/skills/javascript.png',
  '/images/skills/material.png',
  '/images/skills/typescript.png',
  '/images/skills/angular.png',
  '/images/skills/firebase.png',
  '/images/skills/git.png',
  '/images/skills/api.png',
  '/images/skills/scrum.png',
];

skill_name: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'Material Design',
  'TypeScript',
  'Angular',
  'Firebase',
  'GIT',
  'Rest-Api',
  'Srcum',
];

}
