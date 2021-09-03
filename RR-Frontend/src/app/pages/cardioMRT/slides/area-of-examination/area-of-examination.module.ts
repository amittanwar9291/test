import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AreaOfExaminationComponent } from './area-of-examination.component';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    CheckboxModule,
    BmiCalculatorModule,
    RadioButtonModule,
    CommonImportsModule,
    PatientInformationModule
  ],
  declarations: [AreaOfExaminationComponent]
})
export class AreaOfExaminationModule {}
