import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import {
  SpineComplexComponent,
  SpineSimpleComponent,
  SpineSimpleSidesComponent,
  PelvisSimpleComponent,
  AxialLocalizerComponent,
  SpineDirectionalComponent,
  DiscGeneralLocalizerComponent,
  SpineDiscLocalizerComponent
} from '../localizers';
import { LocalizerDescriptionFrameModule } from '@sharedPages/localizer-description-frame/localizer-description-frame.module';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule, LocalizerDescriptionFrameModule],
  declarations: [
    SpineSimpleComponent,
    SpineSimpleSidesComponent,
    SpineComplexComponent,
    PelvisSimpleComponent,
    AxialLocalizerComponent,
    SpineDirectionalComponent,
    DiscGeneralLocalizerComponent,
    SpineDiscLocalizerComponent
  ],
  exports: [
    SpineSimpleComponent,
    SpineSimpleSidesComponent,
    SpineComplexComponent,
    PelvisSimpleComponent,
    AxialLocalizerComponent,
    SpineDirectionalComponent,
    DiscGeneralLocalizerComponent,
    SpineDiscLocalizerComponent
  ]
})
export class SpineSharedLocalizersModule {}
