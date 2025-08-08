import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  text = '';
  constructor(private translate: TranslateService) {}

  // changeText(data:string){
  //   this.text = data;
  // }

  changeText(key: string) {
    if (key == '') {
      this.text = '';
    } else {
      this.translate.get(key).subscribe((translatedText: string) => {
        this.text = translatedText;
      });
    }
  }
}
