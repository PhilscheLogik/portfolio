import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective,RouterLink],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {

}
