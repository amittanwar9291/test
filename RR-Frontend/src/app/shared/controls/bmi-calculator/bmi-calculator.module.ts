import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SliderInputModule } from '../slider-input/slider-input.module';
import { BmiCalculatorComponent } from './bmi-calculator.component';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
@NgModule({
  imports: [FormsModule, CommonModule, SliderInputModule, TranslateModule, CommonImportsModule],
  declarations: [BmiCalculatorComponent],
  exports: [BmiCalculatorComponent]
})
export class BmiCalculatorModule {}
