import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalizationComponent } from './localization.component';
import { AngiographyLocalizersModule } from '../../shared/angiography-localizers.module';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { PatientInformationModule } from '../../../../shared/common-templates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngiographyLocalizersModule,
    BmiCalculatorModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    NumberInputModule,
    PatientInformationModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
