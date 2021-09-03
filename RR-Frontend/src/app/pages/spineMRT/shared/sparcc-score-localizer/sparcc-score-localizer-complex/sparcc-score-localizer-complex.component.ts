import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ScoreLocationModel } from '@models/spineMRT/ui/spine/score-location.model';

@Component({
  selector: 'rr-sparcc-score-localizer-complex',
  templateUrl: './sparcc-score-localizer-complex.component.html',
  styleUrls: ['./sparcc-score-localizer-complex.component.scss'],
  providers: [MakeProvider(SparccScoreLocalizerComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SparccScoreLocalizerComplexComponent extends LocalizerBase<ScoreLocationModel> {
  @Output() elementClick = new EventEmitter<boolean>();
  constructor() {
    super(ScoreLocationModel);
  }

  selectElement(name: string) {
    super.selectElement(name);
    this.elementClick.emit(this.ngValue[name]);
  }
}
