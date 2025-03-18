import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why-page',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './why-page.component.html',
  styleUrl: './why-page.component.scss',
})
export class WhyPageComponent {
  icons = [
    'assets/img/icons/icon_location.svg',
    'assets/img/icons/icon_remote.svg',
  ];
  texts: string[][] = [];

  currentIconIndex = 0;
  currentTextIndex = 0;
  displayPartOne = '';
  displayPartTwo = '';
  isDeleting = false;
  speed = 100;
  pauseTime = 1500;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    const partOne = this.translate.instant('why.leftPartOne');
    const partTwo =
      this.currentTextIndex === 0
        ? this.translate.instant('why.leftPartTwo')
        : this.translate.instant('why.leftPartThree');

    const fullText = partOne + partTwo;

    if (!this.isDeleting) {
      // Text aufbauen
      if (this.displayPartOne.length < partOne.length) {
        this.displayPartOne += partOne[this.displayPartOne.length];
      } else if (this.displayPartTwo.length < partTwo.length) {
        this.displayPartTwo += partTwo[this.displayPartTwo.length];
      } else {
        setTimeout(() => {
          this.isDeleting = true;
          this.startTyping();
        }, this.pauseTime);
        return;
      }
    } else {
      // Text löschen
      if (this.displayPartTwo.length > 0) {
        this.displayPartTwo = this.displayPartTwo.slice(0, -1);
      } else if (this.displayPartOne.length > 0) {
        this.displayPartOne = this.displayPartOne.slice(0, -1);
      } else {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % 2;
        this.currentIconIndex = (this.currentIconIndex + 1) % this.icons.length;
        setTimeout(() => this.startTyping(), this.pauseTime / 2);
        return;
      }
    }
    setTimeout(() => this.startTyping(), this.speed);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }
}
