import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MeasuredValuesBase } from '../measured-values-base';

@Component({
  selector: 'rr-aorta-ascendens',
  templateUrl: './aorta-ascendens.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class AortaAscendensComponent extends MeasuredValuesBase {}
