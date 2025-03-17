import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  TranslatePipe, 
} from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
