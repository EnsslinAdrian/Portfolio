import { Component, OnInit } from '@angular/core';
import { VariablenService } from '../../../services/variablen.service';
import { SlideBannerComponent } from "./slide-banner/slide-banner.component";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [SlideBannerComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit{
language: boolean = true;
constructor(private service: VariablenService) {}

ngOnInit(): void {
  this.service.currentLanguage.subscribe(language => {
    this.language = language;
  })
}

}
