import { Component } from '@angular/core';
import { MyPictureComponent } from "./my-picture/my-picture.component";
import { MyStoryTextComponent } from "./my-story-text/my-story-text.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MyPictureComponent, MyStoryTextComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
