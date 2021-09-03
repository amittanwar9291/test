import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { LiverSegmentsFocalSmallLocalizerComponent } from './liver-segments-focal-localizer/liver-segments-focal-small-localizer/liver-segments-focal-small-localizer.component';
import { LiverSegmentsFocalBigLocalizerComponent } from './liver-segments-focal-localizer/liver-segments-focal-big-localizer/liver-segments-focal-big-localizer.component';
import { LiverPathologySmallLocalizerComponent } from './liver-pathology-localizer/liver-pathology-small-localizer/liver-pathology-small-localizer.component';
import { LiverPathologyBigLocalizerComponent } from './liver-pathology-localizer/liver-pathology-big-localizer/liver-pathology-big-localizer.component';
import { LiverSegmentsBigLocalizerComponent } from './liver-segments-localizer/liver-segments-big-localizer/liver-segments-big-localizer.component';
import { LiverSegmentsSmallLocalizerComponent } from './liver-segments-localizer/liver-segments-small-localizer/liver-segments-small-localizer.component';

@NgModule({
  imports: [CommonModule, CommonImportsModule, TranslateModule],
  declarations: [
    LiverSegmentsBigLocalizerComponent,
    LiverSegmentsSmallLocalizerComponent,
    LiverSegmentsFocalBigLocalizerComponent,
    LiverSegmentsFocalSmallLocalizerComponent,
    LiverPathologySmallLocalizerComponent,
    LiverPathologyBigLocalizerComponent
  ],
  exports: [
    LiverSegmentsBigLocalizerComponent,
    LiverSegmentsSmallLocalizerComponent,
    LiverSegmentsFocalBigLocalizerComponent,
    LiverSegmentsFocalSmallLocalizerComponent,
    LiverPathologySmallLocalizerComponent,
    LiverPathologyBigLocalizerComponent
  ]
})
export class AbdomenLocalizersModule {}
