import { Component, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { CartilageAndLabrumLocalizerUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-localizer-ui.model';

@Component({
  selector: 'rr-hip-cartilage-small',
  templateUrl: './hip-cartilage-small.component.html',
  styleUrls: ['./hip-cartilage-small.component.scss'],
  providers: [MakeProvider(HipCartilageSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HipCartilageSmallComponent extends LocalizerBase<CartilageAndLabrumLocalizerUiModel> {
  constructor() {
    super(CartilageAndLabrumLocalizerUiModel);
  }
}
