import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignalSliderComponent } from '@controls/signal-slider/signal-slider.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SignalSliderComponent],
  exports: [SignalSliderComponent]
})
export class SignalSliderModule {}
