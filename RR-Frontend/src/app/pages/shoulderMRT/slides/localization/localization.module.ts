import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { ShoulderLocalizersModule } from '../../shared/shoulder-localizers.module';

import { LocalizationComponent } from './localization.component';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    ShoulderLocalizersModule,
    BmiCalculatorModule,
    RadioButtonModule,
    CommonImportsModule,
    PatientInformationModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
