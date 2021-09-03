import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ThreeCrossSection } from '@models/pelvisMRT/ui/localizers/three-cross-section';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-three-cross-section-small',
  templateUrl: './three-cross-section-small.component.html',
  styleUrls: ['./three-cross-section-small.component.scss'],
  providers: [MakeProvider(ThreeCrossSectionSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ThreeCrossSectionSmallComponent extends LocalizerBase<ThreeCrossSection> {
  constructor(public translate: TranslateService) {
    super(ThreeCrossSection);
  }
}
