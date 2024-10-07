import { Component, OnInit } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';

@Component({
  selector: 'app-info-text',
  standalone: true,
  imports: [],
  templateUrl: './info-text.component.html',
  styleUrl: './info-text.component.scss'
})
export class InfoTextComponent implements OnInit{
  language: boolean = true;

  contactTextE: string = 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.';
  contactTextDe: string = 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.';

  constructor(private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
        this.language = language;
    })
  }

}
