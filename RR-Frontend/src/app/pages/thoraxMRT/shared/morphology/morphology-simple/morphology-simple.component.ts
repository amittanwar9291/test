import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';

@Component({
  selector: 'rr-morphology-simple',
  templateUrl: './morphology-simple.component.html',
  styleUrls: ['./morphology-simple.component.scss'],
  providers: [MakeProvider(MorphologySimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MorphologySimpleComponent {
  @Input() model: LungsFlapsMulticolorLocalizerUi;

  getElementClass(elem: string): string {
    if (this.model.lessThan50Location[elem]) {
      return 'score-1';
    } else if (this.model.moreThan50Location[elem]) {
      return 'pointer score-2';
    } else {
      return '';
    }
  }
}
