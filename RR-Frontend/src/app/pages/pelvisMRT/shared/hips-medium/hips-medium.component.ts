import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { HipBones } from '@models/pelvisMRT/ui/localizers/hip-bones';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-hips-medium',
  templateUrl: './hips-medium.component.html',
  styleUrls: ['./hips-medium.component.scss'],
  providers: [MakeProvider(HipsMediumComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HipsMediumComponent extends LocalizerBase<HipBones> {
  constructor() {
    super(HipBones);
  }
}
