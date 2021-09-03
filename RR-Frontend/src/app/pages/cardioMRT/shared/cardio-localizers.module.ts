import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberInputModule } from '@controls/number-input/number-input.module';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';
import { CardioCircleEditableMulticolorLocalizerComponent } from './cardio-circle-editable-multicolor-localizer/cardio-circle-editable-multicolor-localizer.component';
import { CardioCircleStaticMulticolorLocalizerComponent } from './cardio-circle-static-multicolor-localizer/cardio-circle-static-multicolor-localizer.component';
import { CardioCircleStaticSinglecolorLocalizerComponent } from './cardio-circle-static-singlecolor-localizer/cardio-circle-static-singlecolor-localizer.component';
import { CardioCircleEditableSinglecolorLocalizerComponent } from './cardio-circle-editable-singlecolor-localizer/cardio-circle-editable-singlecolor-localizer.component';
import { CardioLocalizerPositionerHeaderComponent } from './cardio-relaxation-localizer-controls-group/cardio-localizer-positioner-header/cardio-localizer-positioner-header.component';
import { CardioColorPickerComponent } from './cardio-color-picker/cardio-color-picker.component';
import { CardioRelaxationTimeLocalizerControlsGroupComponent } from './cardio-relaxation-localizer-controls-group/cardio-relaxation-time-localizer-controls-group.component';
import { CardioLocalizationLesionPathologyComponent } from './cardio-localization-lesion-pathology/cardio-localization-lesion-pathology.component';
import { CardioLungLocalizerLargeComponent } from './cardio-lung-localizer/cardio-lung-localizer-large/cardio-lung-localizer-large.component';
import { CardioLungLocalizerSmallComponent } from './cardio-lung-localizer/cardio-lung-localizer-small/cardio-lung-localizer-small.component';
import { TabViewModule } from 'primeng/tabview';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    NumberInputModule,
    TabViewModule,
    ReferencePictureModule,
    DropdownModule
  ],
  declarations: [
    CardioCircleEditableMulticolorLocalizerComponent,
    CardioCircleStaticMulticolorLocalizerComponent,
    CardioCircleStaticSinglecolorLocalizerComponent,
    CardioCircleEditableSinglecolorLocalizerComponent,
    CardioLocalizerPositionerHeaderComponent,
    CardioColorPickerComponent,
    CardioRelaxationTimeLocalizerControlsGroupComponent,
    CardioLocalizationLesionPathologyComponent,
    CardioLungLocalizerLargeComponent,
    CardioLungLocalizerSmallComponent
  ],
  exports: [
    CardioCircleEditableMulticolorLocalizerComponent,
    CardioCircleStaticMulticolorLocalizerComponent,
    CardioCircleStaticSinglecolorLocalizerComponent,
    CardioCircleEditableSinglecolorLocalizerComponent,
    CardioLocalizerPositionerHeaderComponent,
    CardioColorPickerComponent,
    CardioRelaxationTimeLocalizerControlsGroupComponent,
    CardioLocalizationLesionPathologyComponent,
    CardioLungLocalizerLargeComponent,
    CardioLungLocalizerSmallComponent
  ]
})
export class CardioLocalizersModule {}
