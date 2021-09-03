import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ArterialTerritoriesLocalizerModel } from '@models/headMRT/ui/arterial-territories-localizer.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-arterial-territories-localizer-simple',
  templateUrl: './arterial-territories-localizer-simple.component.html',
  styleUrls: ['./arterial-territories-localizer-simple.component.scss'],
  providers: [MakeProvider(ArterialTerritoriesLocalizerSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ArterialTerritoriesLocalizerSimpleComponent extends LocalizerBase<ArterialTerritoriesLocalizerModel> {
  constructor() {
    super(ArterialTerritoriesLocalizerModel);
  }
}
