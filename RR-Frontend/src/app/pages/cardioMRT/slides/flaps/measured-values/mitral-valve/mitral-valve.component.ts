import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MeasuredValuesBase } from '../measured-values-base';

@Component({
  selector: 'rr-mitral-valve',
  templateUrl: 'mitral-valve.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class MitralValveComponent extends MeasuredValuesBase {}
