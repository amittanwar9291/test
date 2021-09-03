import { Component, ViewEncapsulation, Input } from '@angular/core';

import { BreastSegmentShoulder } from '@models/shared/mamma/breast/breast-segment-shoulder.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-breast-segment-shoulder',
  templateUrl: './breast-segment-shoulder.component.html',
  styleUrls: ['./breast-segment-shoulder.component.scss'],
  providers: [MakeProvider(BreastSegmentShoulderComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BreastSegmentShoulderComponent extends LocalizerBase<BreastSegmentShoulder> {
  @Input() breastToDisable: string;

  constructor() {
    super(BreastSegmentShoulder);
  }
}
