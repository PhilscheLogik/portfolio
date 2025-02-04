import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
