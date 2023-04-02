import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, TranslateModule.forChild(), FeatureRoutingModule],
})
export class FeatureModule {}
