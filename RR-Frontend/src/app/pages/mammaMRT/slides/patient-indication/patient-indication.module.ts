import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { TranslateModule } from '@ngx-translate/core';

import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { PatientIndicationComponent } from './patient-indication.component';
import { MammaSharedLocalizersModule } from '../../../shared/mamma/localizers/mamma-shared-localizers.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { GenderSelectModule } from '../../../../shared/common-templates/patient-data/gender-select/gender-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MonthYearInputModule,
    MammaSharedLocalizersModule,
    RadioButtonModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    BmiCalculatorModule,
    FindingColumnModule,
    TranslateModule,
    CommonImportsModule,
    GenderSelectModule,
    NumberInputModule
  ],
  declarations: [PatientIndicationComponent]
})
export class PatientIndicationModule {}
