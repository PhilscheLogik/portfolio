import { Component } from '@angular/core';

import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-why-page',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './why-page.component.html',
  styleUrl: './why-page.component.scss',
})
export class WhyPageComponent {

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }
}
