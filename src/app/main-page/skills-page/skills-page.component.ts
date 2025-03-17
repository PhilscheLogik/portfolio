import { Component } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss',
})
export class SkillsPageComponent {
  items = [
    {
      image: './assets/img/icons/html_icon.svg',
      alt: 'html icon',
      title: 'HTML',
    },
    {
      image: './assets/img/icons/CSS_icon.svg',
      alt: 'angular icon',
      title: 'CSS',
    },
    {
      image: './assets/img/icons/js_icon.svg',
      alt: 'javascript icon',
      title: 'JavaScript',
    },
    {
      image: './assets/img/icons/ts_icon.svg',
      alt: 'typescript icon',
      title: 'TypeScript',
    },
    {
      image: './assets/img/icons/angular_icon.svg',
      alt: 'angular icon',
      title: 'Angular',
    },
    {
      image: './assets/img/icons/api_icon.svg',
      alt: 'rest api icon',
      title: 'Rest-Api',
    },
    {
      image: './assets/img/icons/git_icon.svg',
      alt: 'git icon',
      title: 'Git',
    },
    {
      image: './assets/img/icons/scrum_icon.svg',
      alt: 'Scrum icon',
      title: 'Scrum',
    },
    {
      image: './assets/img/icons/class_diagram.png',
      alt: 'Class diagram icon',
      title: 'Class-Diagram',
    },
  ];

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }
}
