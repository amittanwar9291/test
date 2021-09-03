import { Component, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { OneCrossSection } from '@models/pelvisMRT/ui/localizers/one-cross-section';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-one-cross-section-big',
  templateUrl: './one-cross-section-big.component.html',
  styleUrls: ['./one-cross-section-big.component.scss'],
  providers: [MakeProvider(OneCrossSectionBigComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OneCrossSectionBigComponent extends LocalizerBase<OneCrossSection> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService) {
    super(OneCrossSection);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
