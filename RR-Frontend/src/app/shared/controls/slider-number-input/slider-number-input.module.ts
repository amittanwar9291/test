import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SliderNumberInputComponent } from './slider-number-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule],
  declarations: [SliderNumberInputComponent],
  exports: [SliderNumberInputComponent]
})
export class SliderNumberInputModule {}
