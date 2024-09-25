import { Component } from '@angular/core';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { HeaderComponent } from "../shared/header/header.component";
import { SlideBannerComponent } from "./above-the-fold/slide-banner/slide-banner.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, HeaderComponent, SlideBannerComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
