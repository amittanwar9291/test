import { Component, Input, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';

@Component({
  selector: 'rr-spine-disc-general-localizer',
  templateUrl: './disc-general-localizer.component.html',
  styleUrls: ['./disc-general-localizer.component.scss'],
  providers: [MakeProvider(DiscGeneralLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DiscGeneralLocalizerComponent extends LocalizerBase<DiscGeneralLocationModel> {
  @Input() logicType: string;

  constructor() {
    super(DiscGeneralLocationModel);
  }

  isLogicType(name: string): boolean {
    return this.logicType === name || this.logicType === 'ventralAndDorsal';
  }
}
