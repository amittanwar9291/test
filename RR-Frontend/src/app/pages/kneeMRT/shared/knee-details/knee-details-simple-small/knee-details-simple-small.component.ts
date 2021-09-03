import { Component, ViewEncapsulation } from '@angular/core';

import { KneeDetails } from '@models/kneeMRT/ui/knee/knee-details-ui.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-knee-details-simple-small',
  templateUrl: './knee-details-simple-small.component.html',
  styleUrls: ['./knee-details-simple-small.component.scss'],
  providers: [MakeProvider(KneeDetailsSimpleSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeDetailsSimpleSmallComponent extends LocalizerBase<KneeDetails> {
  constructor() {
    super(KneeDetails);
  }
}
