import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UterusOrientationSmallComponent } from './uterus-orientation/uterus-orientation-small/uterus-orientation-small.component';
import { UterusOrientationBigComponent } from './uterus-orientation/uterus-orientation-big/uterus-orientation-big.component';
import { TranslateModule } from '@ngx-translate/core';
import { FIGOClassificationBigComponent } from './FIGO-classification/FIGO-classification-big/FIGO-classification-big.component';
import { FIGOClassificationSmallComponent } from './FIGO-classification/FIGO-classification-small/FIGO-classification-small.component';
import { OneCrossSectionSmallComponent } from './one-cross-section/one-cross-section-small/one-cross-section-small.component';
import { OneCrossSectionBigComponent } from './one-cross-section/one-cross-section-big/one-cross-section-big.component';
import { ThreeCrossSectionBigComponent } from './three-cross-section/big/three-cross-section-big.component';
import { ThreeCrossSectionSmallComponent } from './three-cross-section/small/three-cross-section-small.component';
import { HipsSmallComponent } from './hips-small/hips-small.component';
import { HipsMediumComponent } from './hips-medium/hips-medium.component';
import { HipsLargeComponent } from './hips-large/hips-large.component';
import { CloseButtonModule } from '@controls/close-button/close-button.module';
import { LymphNodesBigComponent } from './lymph-nodes/big/lymph-nodes-big.component';
import { LymphNodesSmallComponent } from './lymph-nodes/small/lymph-nodes-small.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PelvisBonesComponent } from './pelvis-bones/pelvis-bones.component';
import { RectumSmallComponent } from './rectum/small/rectum-small.component';
import { RectumBigComponent } from './rectum/big/rectum-big.component';
import { LocalizerDescriptionFrameModule } from '@sharedPages/localizer-description-frame/localizer-description-frame.module';

@NgModule({
  imports: [TranslateModule, CommonImportsModule, CommonModule, CloseButtonModule, LocalizerDescriptionFrameModule],
  declarations: [
    UterusOrientationSmallComponent,
    UterusOrientationBigComponent,
    FIGOClassificationBigComponent,
    FIGOClassificationSmallComponent,
    ThreeCrossSectionBigComponent,
    ThreeCrossSectionSmallComponent,
    OneCrossSectionSmallComponent,
    OneCrossSectionBigComponent,
    LymphNodesBigComponent,
    LymphNodesSmallComponent,
    HipsSmallComponent,
    HipsMediumComponent,
    HipsLargeComponent,
    PelvisBonesComponent,
    RectumSmallComponent,
    RectumBigComponent
  ],
  exports: [
    UterusOrientationSmallComponent,
    UterusOrientationBigComponent,
    FIGOClassificationBigComponent,
    FIGOClassificationSmallComponent,
    ThreeCrossSectionBigComponent,
    ThreeCrossSectionSmallComponent,
    OneCrossSectionSmallComponent,
    OneCrossSectionBigComponent,
    LymphNodesBigComponent,
    LymphNodesSmallComponent,
    HipsSmallComponent,
    HipsMediumComponent,
    HipsLargeComponent,
    PelvisBonesComponent,
    RectumSmallComponent,
    RectumBigComponent
  ],
  providers: [
    LymphNodesBigComponent,
    LymphNodesSmallComponent,
    OneCrossSectionBigComponent,
    HipsSmallComponent,
    HipsMediumComponent,
    HipsLargeComponent
  ]
})
export class PelvisLocalizersModule {}
