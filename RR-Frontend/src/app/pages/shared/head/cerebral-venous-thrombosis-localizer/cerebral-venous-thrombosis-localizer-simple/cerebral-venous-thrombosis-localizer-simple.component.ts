import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { CerebralVenousThrombosisLocalizerModel } from '@models/headMRT/ui/cerebral-venous-thrombosis-localizer.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-cerebral-venous-thrombosis-localizer-simple',
  templateUrl: './cerebral-venous-thrombosis-localizer-simple.component.html',
  styleUrls: ['./cerebral-venous-thrombosis-localizer-simple.component.scss'],
  providers: [MakeProvider(CerebralVenousThrombosisLocalizerSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CerebralVenousThrombosisLocalizerSimpleComponent extends LocalizerBase<CerebralVenousThrombosisLocalizerModel> {
  constructor() {
    super(CerebralVenousThrombosisLocalizerModel);
  }
}
