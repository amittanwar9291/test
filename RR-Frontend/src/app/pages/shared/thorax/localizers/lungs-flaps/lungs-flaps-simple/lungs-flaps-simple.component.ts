import { Component, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

@Component({
  selector: 'rr-lungs-flaps-simple',
  templateUrl: './lungs-flaps-simple.component.html',
  styleUrls: ['./lungs-flaps-simple.component.scss'],
  providers: [MakeProvider(LungsFlapsSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LungsFlapsSimpleComponent extends LocalizerBase<LungsFlapsModel> {
  constructor() {
    super(LungsFlapsModel);
  }
}
