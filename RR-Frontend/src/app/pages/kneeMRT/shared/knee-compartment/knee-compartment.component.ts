import { Component } from '@angular/core';

import { KneeCompartment } from '@models/kneeMRT/ui/knee/knee-compartment.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-knee-compartment',
  templateUrl: './knee-compartment.component.html',
  styleUrls: ['./knee-compartment.component.scss'],
  providers: [MakeProvider(KneeCompartmentComponent)]
})
export class KneeCompartmentComponent extends LocalizerBase<KneeCompartment> {
  constructor() {
    super(KneeCompartment);
  }
}
