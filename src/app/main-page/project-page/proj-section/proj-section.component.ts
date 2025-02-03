import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    techText: string;
    id: number;
    tech: string;
    techIcons: [imgPath: any];
    projectPath: string;
    gitHubPath: string;
    imgPath: string;
    duration: string;
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
