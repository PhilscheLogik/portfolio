import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  showImage: boolean;
  showGithub: boolean;
  showMail: boolean;
  showButton: boolean;
  showLinkedIn: boolean;
  showLogo: boolean;

  constructor() {
    this.showImage = false;

    this.showGithub = false;
    this.showMail = false;
    this.showLinkedIn = false;

    this.showLogo = false;

    this.showButton = false;  
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }
}
