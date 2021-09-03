import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { LocalizationComponent } from './localization.component';
import { HipLocalizersModule } from '../../shared/hip-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    BmiCalculatorModule,
    TranslateModule,
    NumberInputModule,
    CommonImportsModule,
    HipLocalizersModule,
    PatientInformationModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
