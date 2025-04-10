import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ProjSectionComponent } from './proj-section/proj-section.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [TranslatePipe, ProjSectionComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  selectedProjectIndex = 0;
  projects: any[] = [];

  constructor(private translate: TranslateService) {
    this.loadTranslations();
    
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations(): void {
    this.projects = [
      {
        id: 1,
        title: 'Pokédex',
        duration: this.translate.instant('proj.dura1'),
        tech: this.translate.instant('proj.tech'),
        imgPath: './../../../../assets/img/projects/Pokedex_cover.png',
        gitHubPath: 'https://github.com/PhilscheLogik/pokedex',
        projectPath: 'https://pokedex.franke-philipp.de/',
        name: this.translate.instant('proj.name'),
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
        techIcons: [
          {
            imgPath: './../../../../assets/img/icons/html_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/CSS_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/js_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/api_icon.svg',
          },
        ],
        techText: 'HTML' + ', ' + 'CSS' + ', ' + 'JavaScript' + ', ' + 'API',
      },

      {
        id: 2,
        title: 'Game',
        duration: this.translate.instant('proj.dura2'),
        tech: this.translate.instant('proj.tech'),
        imgPath: './../../../../assets/img/projects/TSS_cover.png',
        gitHubPath: 'https://github.com/PhilscheLogik/game_JnR',
        projectPath: 'https://the-sunken-ships.franke-philipp.de/',
        name: this.translate.instant('proj.name'),
        keyPoints: [
          {
            title: this.translate.instant('proj.title1'),
            text: this.translate.instant('proj.text4'),
          },
          {
            title: this.translate.instant('proj.title2'),
            text: this.translate.instant('proj.text5'),
          },
          {
            title: this.translate.instant('proj.title3'),
            text: this.translate.instant('proj.text6'),
          },
        ],
        techIcons: [
          {
            imgPath: './../../../../assets/img/icons/html_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/CSS_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/js_icon.svg',
          },
        ],
        techText: 'HTML' + ', ' + 'CSS' + ', ' + 'JavaScript',
      },
      {
        id: 3,
        title: 'Join',
        duration: this.translate.instant('proj.dura3'),
        tech: this.translate.instant('proj.tech'),
        imgPath: './../../../../assets/img/projects/join_cover.png',
        gitHubPath: 'https://github.com/PhilscheLogik/Join',
        projectPath: 'https://join.franke-philipp.de/',
        name: this.translate.instant('proj.name'),
        keyPoints: [
          {
            title: this.translate.instant('proj.title1'),
            text: this.translate.instant('proj.text7'),
          },
          {
            title: this.translate.instant('proj.title2'),
            text: this.translate.instant('proj.text8'),
          },
          {
            title: this.translate.instant('proj.title3'),
            text: this.translate.instant('proj.text9'),
          },
        ],
        techIcons: [
          {
            imgPath: './../../../../assets/img/icons/html_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/CSS_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/ts_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/angular_icon.svg',
          },
        ],
        techText:
          'HTML' + ', ' + 'CSS' + ', ' + 'TypeScript' + ', ' + 'Angular',
      },
      {
        id: 4,
        title: this.translate.instant('proj.others'),
        tech: this.translate.instant('proj.tech'),
        imgPath: './../../../../assets/img/projects/CS_cover.png',
        name: this.translate.instant('proj.name'),
        keyPoints: [
          {
            title: this.translate.instant('proj.title1'),
            text: this.translate.instant('proj.text10'),
          },
        ],
        techIcons: [
          {
            imgPath: './../../../../assets/img/icons/html_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/CSS_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/ts_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/angular_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/react_icon.svg',
          },
          {
            imgPath: './../../../../assets/img/icons/vue_icon.svg',
          },
        ],
        techText:
          'HTML' +
          ', ' +
          'CSS' +
          ', ' +
          'TypeScript' +
          ', ' +
          'React' +
          ', ' +
          'VueJs',
      },
    ];
  }

  selectProject(index: number): void {
    this.selectedProjectIndex = index;
  }
}
