import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { CortexLocalizerModel } from '@models/headMRT/ui/cortex-localizer.model';

@Component({
  selector: 'rr-cortex-localizer-simple',
  templateUrl: './cortex-localizer-simple.component.html',
  styleUrls: ['./cortex-localizer-simple.component.scss'],
  providers: [MakeProvider(CortexLocalizerSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CortexLocalizerSimpleComponent extends LocalizerBase<CortexLocalizerModel> {
  constructor() {
    super(CortexLocalizerModel);
  }
}
