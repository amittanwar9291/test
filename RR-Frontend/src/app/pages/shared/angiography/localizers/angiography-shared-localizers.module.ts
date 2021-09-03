import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

import { ArteriesSegmentsSmallLocalizerComponent } from './arteries-segments-localizer/arteries-segments-small-localizer/arteries-segments-small-localizer.component';
import { ArteriesSegmentsBigLocalizerComponent } from './arteries-segments-localizer/arteries-segments-big-localizer/arteries-segments-big-localizer.component';
import { CarotidArteryBigLocalizerComponent } from '@sharedPages/angiography/localizers/carotid-artery-localizer/big/carotid-artery-big-localizer.component';
import { CarotidArterySmallLocalizerComponent } from '@sharedPages/angiography/localizers/carotid-artery-localizer/small/carotid-artery-small-localizer.component';

@NgModule({
  declarations: [
    ArteriesSegmentsSmallLocalizerComponent,
    ArteriesSegmentsBigLocalizerComponent,
    CarotidArteryBigLocalizerComponent,
    CarotidArterySmallLocalizerComponent
  ],
  exports: [
    ArteriesSegmentsSmallLocalizerComponent,
    ArteriesSegmentsBigLocalizerComponent,
    CarotidArteryBigLocalizerComponent,
    CarotidArterySmallLocalizerComponent
  ],
  imports: [CommonModule, TranslateModule, CommonImportsModule]
})
export class AngiographySharedLocalizersModule {}
