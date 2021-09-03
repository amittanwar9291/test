import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { FeetSimpleModel } from '@models/feetMRT/ui/localizers/feet-simple.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-feet-simple',
  templateUrl: './feet-simple.component.html',
  styleUrls: ['./feet-simple.component.scss'],
  providers: [MakeProvider(FeetSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FeetSimpleComponent extends LocalizerBase<FeetSimpleModel> {
  constructor() {
    super(FeetSimpleModel);
  }
}
