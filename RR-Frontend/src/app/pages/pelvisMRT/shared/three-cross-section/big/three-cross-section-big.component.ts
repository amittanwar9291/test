import { Component, Output, ViewEncapsulation, EventEmitter, Input } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ThreeCrossSection } from '@models/pelvisMRT/ui/localizers/three-cross-section';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-three-cross-section-big',
  templateUrl: './three-cross-section-big.component.html',
  styleUrls: ['./three-cross-section-big.component.scss'],
  providers: [MakeProvider(ThreeCrossSectionBigComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ThreeCrossSectionBigComponent extends LocalizerBase<ThreeCrossSection> {
  // Transitional (TZ), Peripheral (PZ), default: All
  @Input() zone = 'All';
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService) {
    super(ThreeCrossSection);
  }

  isElementEnabled(elementName): boolean {
    const transitionalElementsStartsWith = 'tZ';
    const peripheralElementsStartsWith = 'pZ';

    return (
      (elementName.startsWith(transitionalElementsStartsWith) && this.zone === 'Transitional') ||
      (elementName.startsWith(peripheralElementsStartsWith) && this.zone === 'Peripheral') ||
      this.zone === 'All'
    );
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
