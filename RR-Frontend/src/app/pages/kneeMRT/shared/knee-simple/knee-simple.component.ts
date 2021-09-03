import { Component, Input, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { KneeSimple } from '@models/kneeMRT/ui/knee/knee-simple.model';

@Component({
  selector: 'rr-knee-simple',
  templateUrl: './knee-simple.component.html',
  styleUrls: ['./knee-simple.component.scss'],
  providers: [MakeProvider(KneeSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeSimpleComponent extends LocalizerBase<KneeSimple> {
  @Input() partToDisable: string;

  constructor() {
    super(KneeSimple);
  }
}
