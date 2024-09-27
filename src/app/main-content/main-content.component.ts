import { Component } from '@angular/core';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { HeaderComponent } from "../shared/header/header.component";
import { SlideBannerComponent } from "./above-the-fold/slide-banner/slide-banner.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { FeaturedProjectsComponent } from "./featured-projects/featured-projects.component";
import { ColleagueFeedbackComponent } from "./colleague-feedback/colleague-feedback.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, HeaderComponent, SlideBannerComponent, AboutMeComponent, SkillsComponent, FeaturedProjectsComponent, ColleagueFeedbackComponent, ContactMeComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
