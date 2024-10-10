import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent implements OnInit {

  http = inject(HttpClient);

  language: boolean = true;
  sendBtn: boolean = true;

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  checkbox: boolean = false;

  constructor(private service: VariablenService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  post = {
    endPoint: 'https://xn--adrianenlin-26a.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  resetSendBtn() {
    this.sendBtn = false;
    setTimeout(() => {
      this.sendBtn = true;
    }, 5000);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            
            this.resetSendBtn();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }


}
