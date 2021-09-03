import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { SpineSharedLocalizersModule } from '../../shared/spine/localizers/spine-shared-localizers.module';
import { SpinalCanalSimpleComponent } from '../../shared/spine/localizers/spinal-canal-simple/spinal-canal-simple.compontent';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';
import { SparccScoreLocalizerSimpleComponent } from './sparcc-score-localizer/sparcc-score-localizer-simple/sparcc-score-localizer-simple.component';
import { SparccScoreLocalizerComplexComponent } from './sparcc-score-localizer/sparcc-score-localizer-complex/sparcc-score-localizer-complex.component';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, SpineSharedLocalizersModule, CommonImportsModule],
  declarations: [SpinalCanalSimpleComponent, SparccScoreLocalizerSimpleComponent, SparccScoreLocalizerComplexComponent],
  exports: [
    SpinalCanalSimpleComponent,
    SpineSharedLocalizersModule,
    SparccScoreLocalizerSimpleComponent,
    SparccScoreLocalizerComplexComponent
  ]
})
export class SpineLocalizersModule {}
