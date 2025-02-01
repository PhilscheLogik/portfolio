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
  styleUrl: './project-page.component.scss'
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
        title: this.translate.instant('proj.title'),
        description: this.translate.instant('proj.textLol'),
      },
      {
        title: this.translate.instant('project.title2'),
        description: this.translate.instant('project.desc2'),
      },
      {
        title: this.translate.instant('project.title3'),
        description: this.translate.instant('project.desc3'),
      },
      {
        title: this.translate.instant('project.title4'),
        description: this.translate.instant('project.desc4'),
      },
    ];
  }

  selectProject(index: number): void {
    this.selectedProjectIndex = index;
  }

}
