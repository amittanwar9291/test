import { Component, ViewEncapsulation } from '@angular/core';
import { OneCrossSection } from '@models/pelvisMRT/ui/localizers/one-cross-section';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-one-cross-section-small',
  templateUrl: './one-cross-section-small.component.html',
  styleUrls: ['./one-cross-section-small.component.scss'],
  providers: [MakeProvider(OneCrossSectionSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OneCrossSectionSmallComponent extends LocalizerBase<OneCrossSection> {
  constructor() {
    super(OneCrossSection);
  }
}
