import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateModule } from '@ngx-translate/core';

import {
  BreastSimpleComponent,
  BreastReconstructionComponent,
  BreastCrossComponent,
  BreastCrossShoulderComponent,
  BreastSegmentShoulderComponent,
  BreastSimpleShoulderComponent,
  BreastFullCrossShoulderComponent,
  BreastPizzaSlicesComponent
} from '../localizers';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule],
  declarations: [
    BreastSimpleComponent,
    BreastCrossComponent,
    BreastCrossShoulderComponent,
    BreastReconstructionComponent,
    BreastSegmentShoulderComponent,
    BreastSimpleShoulderComponent,
    BreastFullCrossShoulderComponent,
    BreastPizzaSlicesComponent
  ],
  exports: [
    BreastSimpleComponent,
    BreastCrossComponent,
    BreastCrossShoulderComponent,
    BreastReconstructionComponent,
    BreastSegmentShoulderComponent,
    BreastSimpleShoulderComponent,
    BreastFullCrossShoulderComponent,
    BreastPizzaSlicesComponent
  ]
})
export class MammaSharedLocalizersModule {}
