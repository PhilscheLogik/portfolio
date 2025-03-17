import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    mail: '',
    msg: '',
    isChecked: false,
  };

  mailTest = true;
  submitted = false;

  http = inject(HttpClient);

  post = {
    endPoint: 'https://franke-philipp.de/assets/php/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  showModal = false;
  sendMessage() {
    // Hier wird deine Nachricht gesendet...
    this.showModal = true; // Modal anzeigen
  }

  closeModal() {
    this.showModal = false; // Modal ausblenden
  }

  onSubmit(ngForm: NgForm) {
    this.submitted = true;
    // console.log('klick');
    // console.log(ngForm.submitted, ngForm.form.valid);

    if (ngForm.submitted && ngForm.form.valid && this.contactData.isChecked) {
      // console.log('jap, grün');

      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.submitted = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.sendMessage(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.submitted = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
