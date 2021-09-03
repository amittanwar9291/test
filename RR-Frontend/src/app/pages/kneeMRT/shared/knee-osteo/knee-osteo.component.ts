import { Component, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { KneeOsteo } from '@models/kneeMRT/ui/knee/knee-osteo.model';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-knee-osteo',
  templateUrl: './knee-osteo.component.html',
  styleUrls: ['./knee-osteo.component.scss'],
  providers: [MakeProvider(KneeOsteoComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeOsteoComponent extends LocalizerBase<KneeOsteo> {
  constructor() {
    super(KneeOsteo);
  }
}
