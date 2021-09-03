import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rr-axial-localizer',
  templateUrl: './axial-localizer.component.html',
  styleUrls: ['./axial-localizer.component.scss'],
  providers: [MakeProvider(AxialLocalizerComponent)]
})
export class AxialLocalizerComponent extends LocalizerBase<AxialLocation> {
  constructor() {
    super(AxialLocation);
  }
}
