import { Component, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { KneeDetailsExtended } from '@models/kneeMRT/ui/knee/knee-details-extended-ui.model';

@Component({
  selector: 'rr-knee-details-complex-small',
  templateUrl: './knee-details-extended-small.component.html',
  styleUrls: ['./knee-details-extended-small.component.scss'],
  providers: [MakeProvider(KneeDetailsExtendedSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeDetailsExtendedSmallComponent extends LocalizerBase<KneeDetailsExtended> {
  constructor() {
    super(KneeDetailsExtended);
  }
}
