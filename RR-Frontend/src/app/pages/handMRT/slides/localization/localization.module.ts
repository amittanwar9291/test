import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationComponent } from './localization.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { HandLocalizersModule } from '../../shared/hand-localizers.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PatientInformationModule } from '../../../../shared/common-templates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    BmiCalculatorModule,
    RadioButtonModule,
    HandLocalizersModule,
    PatientInformationModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
