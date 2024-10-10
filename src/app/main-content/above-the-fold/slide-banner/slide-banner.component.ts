import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';

@Component({
  selector: 'app-slide-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-banner.component.html',
  styleUrl: './slide-banner.component.scss'
})
export class SlideBannerComponent implements OnInit{
  items = ['Available for Remote work', '•', 'Frontend Developer', '•', 'Based in Donauwörth', '•', 'Open to work', '•'];
  itemsDE = ['Verfügbar für Remote-Arbeit', '•', 'Frontend-Entwickler', '•', 'Wohnhaft in Donauwörth', '•', 'Offen für neue Herausforderungen', '•'];
  language: boolean = true;

  constructor(private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
       this.language = language;
    })
  }
}
