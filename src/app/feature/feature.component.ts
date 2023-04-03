import { Component, OnInit } from '@angular/core';
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
export class FeatureComponent implements OnInit {
  helloFromService = '';
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(this.translateService.getDefaultLang());
    this.helloFromService = this.translateService.instant('HELLO.MESSAGE');
  }
}
