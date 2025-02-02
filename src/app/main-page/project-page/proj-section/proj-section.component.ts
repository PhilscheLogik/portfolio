import { Component, Input } from '@angular/core';

import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-proj-section',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './proj-section.component.html',
  styleUrl: './proj-section.component.scss',
})
export class ProjSectionComponent {
  @Input() project!: {
    title: string;
    description: string;
    keyPoints: [
      {
        title: string;
        text: string;
      }
    ];
  };
}
