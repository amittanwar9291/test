import { Component, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { HandSimple } from '@models/handMRT/ui/hand/localizers/hand-simple.model';

@Component({
  selector: 'rr-hand-simple',
  templateUrl: './hand-simple.component.html',
  styleUrls: ['./hand-simple.component.scss'],
  providers: [MakeProvider(HandSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HandSimpleComponent extends LocalizerBase<HandSimple> {
  constructor() {
    super(HandSimple);
  }
}
