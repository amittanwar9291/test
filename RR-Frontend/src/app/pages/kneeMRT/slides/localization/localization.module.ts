import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

import { TranslateModule } from '@ngx-translate/core';

import { LocalizationComponent } from './localization.component';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { KneeLocalizersModule } from '../../shared/knee-localizers.module';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    KneeLocalizersModule,
    BmiCalculatorModule,
    RadioButtonModule,
    CommonImportsModule,
    PatientInformationModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
