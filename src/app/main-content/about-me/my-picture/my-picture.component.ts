import { Component } from '@angular/core';

@Component({
  selector: 'app-my-picture',
  standalone: true,
  imports: [],
  templateUrl: './my-picture.component.html',
  styleUrl: './my-picture.component.scss'
})
export class MyPictureComponent {
  hover_picture: boolean = false;

}
