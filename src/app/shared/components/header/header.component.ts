import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedItem: number | null = null;
  menuOpen: boolean = true;

  selectItem(index: number): void {
    this.selectedItem = index;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
