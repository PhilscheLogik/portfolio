import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

// https://ngx-translate.org/getting-started/translating-your-components/
export class HeaderComponent {

  selectedItem: number | null = null;
  menuOpen: boolean = true;
  currentItem: number | null = null;

  selectItem(index: number): void {
    this.selectedItem = index;
  }

  currentIndex(index: number): void {
    this.currentItem = index;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private translate: TranslateService) {}

  changeLang(lang: string){
    this.translate.use(lang);
  }




}
