import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {

  showImage: boolean;
  showGithub: boolean;
  showMail: boolean;



  constructor(){
    this.showImage = false;
    this.showGithub = false;
    this.showMail = false;
  }


}
