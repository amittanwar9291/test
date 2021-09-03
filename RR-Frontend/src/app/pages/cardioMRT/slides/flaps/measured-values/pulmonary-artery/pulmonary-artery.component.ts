import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MeasuredValuesBase } from '../measured-values-base';

@Component({
  selector: 'rr-pulmonary-artery',
  templateUrl: 'pulmonary-artery.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PulmonaryArteryComponent extends MeasuredValuesBase {}
