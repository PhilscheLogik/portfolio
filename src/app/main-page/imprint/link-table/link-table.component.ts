import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-link-table',
  standalone: true,
  imports: [TranslatePipe, RouterLink, FormsModule],
  templateUrl: './link-table.component.html',
  styleUrl: './link-table.component.scss',
})
export class LinkTableComponent {
  password = '';
  visibility = 'password';

  isPasswordCorrect() {
    return this.password == 'Jobcenter070825';
  }

  toggleVisibility() {
    this.visibility =
      this.visibility == 'password'
        ? (this.visibility = 'text')
        : (this.visibility = 'password');
  }
}
