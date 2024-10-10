import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from "../../main-content/about-me/about-me.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { VariablenService } from '../../../services/variablen.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [AboutMeComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  language: boolean = true;

  constructor(private service: VariablenService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }


}
