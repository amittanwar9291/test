import { Component, Input } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { PelvisLocation } from '@models/shared/spine/localizers/pelvis-location.model';

@Component({
  selector: 'rr-pelvis-simple',
  templateUrl: './pelvis-simple.component.html',
  styleUrls: ['./pelvis-simple.component.scss'],
  providers: [MakeProvider(PelvisSimpleComponent)]
})
export class PelvisSimpleComponent extends LocalizerBase<PelvisLocation> {
  constructor() {
    super(PelvisLocation);
  }
}
