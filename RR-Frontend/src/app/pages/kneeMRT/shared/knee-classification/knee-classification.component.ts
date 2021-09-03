import { Component, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { KneeClassification } from '@models/kneeMRT/ui/knee/knee-classification.model';

@Component({
  selector: 'rr-classification-knee',
  templateUrl: './knee-classification.component.html',
  styleUrls: ['./knee-classification.component.scss'],
  providers: [MakeProvider(KneeClassificationComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeClassificationComponent extends LocalizerBase<KneeClassification> {
  constructor() {
    super(KneeClassification);
  }
}
