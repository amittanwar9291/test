import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { LungsFlapsSimpleComponent } from './lungs-flaps/lungs-flaps-simple/lungs-flaps-simple.component';
import { LungsFlapsComplexComponent } from './lungs-flaps/lungs-flaps-complex/lungs-flaps-complex.component';
import { RibsSimpleComponent } from '@sharedPages/thorax/localizers/ribs/ribs-simple/ribs-simple.component';
import { RibsComplexComponent } from '@sharedPages/thorax/localizers/ribs/ribs-complex/ribs-complex.component';
import { LocalizerDescriptionFrameModule } from '@sharedPages/localizer-description-frame/localizer-description-frame.module';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule, LocalizerDescriptionFrameModule],
  declarations: [LungsFlapsSimpleComponent, LungsFlapsComplexComponent, RibsSimpleComponent, RibsComplexComponent],
  exports: [LungsFlapsSimpleComponent, LungsFlapsComplexComponent, RibsSimpleComponent, RibsComplexComponent]
})
export class ThoraxSharedLocalizersModule {}
