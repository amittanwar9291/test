import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ElbowSimpleModel } from '@models/elbowMRT/ui/elbow/elbow-simple.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-elbow-simple',
  templateUrl: './elbow-simple.component.html',
  styleUrls: ['./elbow-simple.component.scss'],
  providers: [MakeProvider(ElbowSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElbowSimpleComponent extends LocalizerBase<ElbowSimpleModel> {
  constructor() {
    super(ElbowSimpleModel);
  }
}
