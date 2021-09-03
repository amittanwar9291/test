import { Component, Input, ViewEncapsulation } from '@angular/core';

import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-breast-simple',
  templateUrl: './breast-simple.component.html',
  styleUrls: ['./breast-simple.component.scss'],
  providers: [MakeProvider(BreastSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BreastSimpleComponent extends LocalizerBase<BreastSimple> {
  @Input() breastToDisable: string;

  constructor() {
    super(BreastSimple);
  }
}
