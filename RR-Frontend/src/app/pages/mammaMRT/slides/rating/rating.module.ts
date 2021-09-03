import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { RatingComponent } from './rating.component';
import { BiRadsComponent } from './bi-rads/bi-rads.component';

import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, SliderNumberInputModule, RadioButtonModule, CheckboxModule, CommonImportsModule],
  declarations: [RatingComponent, BiRadsComponent]
})
export class RatingModule {}
