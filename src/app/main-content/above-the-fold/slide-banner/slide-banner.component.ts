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
  items = ['Frontend Developer', '•', 'Frontend Developer', '•', 'Frontend Developer', '•', 'Frontend Developer', '•'];
  itemsDE = ['Frontend Entwickler', '•', 'Frontend Entwickler', '•', 'Frontend Entwickler', '•', 'Frontend Entwickler', '•'];
  language: boolean = true;

  constructor(private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
       this.language = language;
    })
  }
}
