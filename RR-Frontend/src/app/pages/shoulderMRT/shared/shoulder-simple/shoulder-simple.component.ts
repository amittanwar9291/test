import { Component, Input, ViewEncapsulation } from '@angular/core';

import { ShoulderSimple } from '@models/shoulderMRT/ui/shoulder/shoulder-simple.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-shoulder-simple',
  templateUrl: './shoulder-simple.component.html',
  styleUrls: ['./shoulder-simple.component.scss'],
  providers: [MakeProvider(ShoulderSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShoulderSimpleComponent extends LocalizerBase<ShoulderSimple> {
  @Input() partToDisable: string;

  constructor() {
    super(ShoulderSimple);
  }
}
