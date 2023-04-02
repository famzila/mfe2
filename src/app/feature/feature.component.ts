import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styles: [
    `
      main {
        background-color: lightgrey;
      }
    `,
  ],
})
export class FeatureComponent {
  helloFromService = '';
  constructor(private translateService: TranslateService) {
    this.helloFromService = this.translateService.instant('HELLO');
  }
}
