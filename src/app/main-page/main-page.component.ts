import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
