import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styles: [
    `
      main {
        background-color: bisque;
        padding: 1rem;
      }
    `,
  ],
})
export class FeatureComponent implements OnInit {
  helloFromService = '';
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(this.translateService.getDefaultLang());
    this.helloFromService = this.translateService.instant('MFE2.HELLO.MESSAGE');
  }
}
