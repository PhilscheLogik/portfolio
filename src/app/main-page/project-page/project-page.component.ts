import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';
import { ProjSectionComponent } from './proj-section/proj-section.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, ProjSectionComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  selectedProjectIndex = 0;
  projects: any[] = [];

  constructor(private translate: TranslateService) {
    this.loadTranslations();

    // Falls sich die Sprache ändert, müssen wir die Projekte neu übersetzen
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations(): void {
    this.projects = [
      {
        title: 'Pokédex',
        keyPoints: [
          {
            title: this.translate.instant('proj.title1'),
            text: this.translate.instant('proj.text1'),
          },
          {
            title: this.translate.instant('proj.title2'),
            text: this.translate.instant('proj.text2'),
          },
          {
            title: this.translate.instant('proj.title3'),
            text: this.translate.instant('proj.text3'),
          },
        ],
      },
      {
        title: 'Game',
        keyPoints: [
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
        ],
      },
      {
        title: 'Join',
        keyPoints: [
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
        ],
      },
      {
        title: 'other Projects',
        keyPoints: [
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
          {
            title: this.translate.instant('proj.text'),
            text: this.translate.instant('proj.textLol'),
          },
        ],
      },
    ];
  }

  selectProject(index: number): void {
    this.selectedProjectIndex = index;
  }
}
