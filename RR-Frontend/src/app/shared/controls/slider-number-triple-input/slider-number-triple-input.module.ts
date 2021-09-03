import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderNumberTripleInputComponent } from './slider-number-triple-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SliderNumberTripleInputComponent],
  exports: [SliderNumberTripleInputComponent]
})
export class SliderNumberTripleInputModule {}
