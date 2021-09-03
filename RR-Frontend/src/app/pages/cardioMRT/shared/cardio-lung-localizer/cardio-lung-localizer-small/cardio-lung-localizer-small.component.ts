import { Component, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LungLocalizerUiModel } from '@models/cardioMRT/ui/pericardium-vessels/lung-localizer-ui.model';
import { LungLocalizer } from '@enums/cardioMRT/pericardium-vessels/lung-localizer.enum';

@Component({
  selector: 'rr-cardio-lung-localizer-small',
  templateUrl: './cardio-lung-localizer-small.component.html',
  styleUrls: ['./cardio-lung-localizer-small.component.scss'],
  providers: [MakeProvider(CardioLungLocalizerSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardioLungLocalizerSmallComponent extends LocalizerBase<LungLocalizerUiModel> {
  lungLocalizer = LungLocalizer;

  constructor() {
    super(LungLocalizerUiModel);
  }
}
