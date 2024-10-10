import { Component, OnInit } from '@angular/core';
import { VariablenService } from '../../../services/variablen.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
language: boolean = true;

logo: string = '/images/logo/logo-adrian.png';
logo_transparent: string = '/images/logo/logo-adrian-hover.png';
hover_logo: boolean = true;

constructor(private service: VariablenService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  reloadPage() {
    window.location.href = '/';
  }
}
