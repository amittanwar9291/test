import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { CloseButtonModule } from '@controls/close-button/close-button.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';

import { HipGeneralComponent } from './hip-general/hip-general.component';
import { HipsSmallComponent } from './hips-small/hips-small.component';
import { HipsLargeComponent } from './hips-large/hips-large.component';
import { HipCartilageSmallComponent } from './hip-cartilage-small/hip-cartilage-small.component';
import { HipCartilageLargeComponent } from './hip-cartilage-large/hip-cartilage-large.component';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [TranslateModule, CloseButtonModule, InfoIconModule, CommonImportsModule],
  declarations: [HipGeneralComponent, HipsLargeComponent, HipsSmallComponent, HipCartilageLargeComponent, HipCartilageSmallComponent],
  exports: [HipGeneralComponent, HipsLargeComponent, HipsSmallComponent, HipCartilageLargeComponent, HipCartilageSmallComponent]
})
export class HipLocalizersModule {}
