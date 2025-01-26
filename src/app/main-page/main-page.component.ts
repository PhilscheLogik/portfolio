import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WhyPageComponent } from './why-page/why-page.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ProfileCardComponent,
    HeaderComponent,
    WhyPageComponent,
    SkillsPageComponent,
    ProjectPageComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
