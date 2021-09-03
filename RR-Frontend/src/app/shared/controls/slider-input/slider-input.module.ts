import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderInputComponent } from './slider-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SliderInputComponent],
  exports: [SliderInputComponent]
})
export class SliderInputModule {}
