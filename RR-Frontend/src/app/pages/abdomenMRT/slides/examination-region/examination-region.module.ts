import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

import { ExaminationRegionComponent } from './examination-region.component';

@NgModule({
  declarations: [ExaminationRegionComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    BmiCalculatorModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    PatientInformationModule
  ]
})
export class ExaminationRegionModule {}
