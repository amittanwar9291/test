import { Component, Input, ViewEncapsulation } from '@angular/core';

import { BreastSimpleShoulder } from '@models/shared/mamma/breast/breast-simple-shoulder.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-breast-simple-shoulder',
  templateUrl: './breast-simple-shoulder.component.html',
  styleUrls: ['./breast-simple-shoulder.component.scss'],
  providers: [MakeProvider(BreastSimpleShoulderComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BreastSimpleShoulderComponent extends LocalizerBase<BreastSimpleShoulder> {
  @Input() breastToDisable: string;

  constructor() {
    super(BreastSimpleShoulder);
  }
}
