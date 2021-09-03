import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LungsComplexComponent, LungsSimpleComponent } from '.';
import { LungsSegmentsSimpleComponent } from './lungs-segments/lungs-segments-simple/lungs-segments-simple.component';
import { LungsSegmentsComplexComponent } from './lungs-segments/lungs-segments-complex/lungs-segments-complex.component';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';
@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, CommonImportsModule],
  declarations: [LungsComplexComponent, LungsSimpleComponent, LungsSegmentsSimpleComponent, LungsSegmentsComplexComponent],
  exports: [LungsComplexComponent, LungsSimpleComponent, LungsSegmentsComplexComponent, LungsSegmentsSimpleComponent]
})
export class ThoraxCTLocalizersModule {}
