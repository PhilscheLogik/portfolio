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

}
