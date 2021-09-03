import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { LocalizationComponent } from './localization.component';

import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    BmiCalculatorModule,
    SpineLocalizersModule,
    CommonImportsModule,
    PatientInformationModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
