import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { CerebralVenousThrombosisLocalizerModel } from '@models/headMRT/ui/cerebral-venous-thrombosis-localizer.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-cerebral-venous-thrombosis-localizer-complex',
  templateUrl: './cerebral-venous-thrombosis-localizer-complex.component.html',
  styleUrls: ['./cerebral-venous-thrombosis-localizer-complex.component.scss'],
  providers: [MakeProvider(CerebralVenousThrombosisLocalizerComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CerebralVenousThrombosisLocalizerComplexComponent extends LocalizerBase<CerebralVenousThrombosisLocalizerModel> {
  @Output() close = new EventEmitter();

  constructor() {
    super(CerebralVenousThrombosisLocalizerModel);
  }

  closeLocalizer() {
    this.close.emit();
  }
}
