import { Component, ViewEncapsulation } from '@angular/core';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-lungs-segments-simple',
  templateUrl: './lungs-segments-simple.component.html',
  styleUrls: ['./lungs-segments-simple.component.scss'],
  providers: [MakeProvider(LungsSegmentsSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LungsSegmentsSimpleComponent extends LocalizerBase<LungsSegmentsModel> {
  constructor() {
    super(LungsSegmentsModel);
  }
}
