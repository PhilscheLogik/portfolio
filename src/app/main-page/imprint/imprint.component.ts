import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LinkTableComponent } from "./link-table/link-table.component";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
