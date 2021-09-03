import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { ShoulderSimpleComponent, LocalizationLabrumPathologyComponent } from '../shared';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule],
  declarations: [ShoulderSimpleComponent, LocalizationLabrumPathologyComponent],
  exports: [ShoulderSimpleComponent, LocalizationLabrumPathologyComponent]
})
export class ShoulderLocalizersModule {}
