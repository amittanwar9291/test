import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-lungs-simple',
  templateUrl: './lungs-simple.component.html',
  styleUrls: ['./lungs-simple.component.scss'],
  providers: [MakeProvider(LungsSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LungsSimpleComponent extends LocalizerBase<LungsModel> {
  constructor() {
    super(LungsModel);
  }
}
