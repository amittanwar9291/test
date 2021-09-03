import { NgModule } from '@angular/core';
import { PatientInformationComponent } from './patient-information.component';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { NumberInputModule } from '@controls/number-input/number-input.module';

@NgModule({
  imports: [CommonModule, FormsModule, RadioButtonModule, CommonImportsModule, TranslateModule, NumberInputModule, BmiCalculatorModule],
  declarations: [PatientInformationComponent],
  exports: [PatientInformationComponent]
})
export class PatientInformationModule {}
