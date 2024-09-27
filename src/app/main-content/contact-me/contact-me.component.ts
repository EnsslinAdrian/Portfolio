import { Component } from '@angular/core';
import { InfoTextComponent } from "./info-text/info-text.component";
import { EmailComponent } from "./email/email.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [InfoTextComponent, EmailComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
