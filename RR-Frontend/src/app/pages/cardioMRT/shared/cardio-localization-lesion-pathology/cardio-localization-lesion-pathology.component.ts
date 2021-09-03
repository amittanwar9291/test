import { Component, ViewEncapsulation, Input } from '@angular/core';

import { LocalizationLesionPathology } from '@models/cardioMRT/ui/localization-lesion-pathology/localization-lesion-pathology-ui.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-cardio-localization-lesion-pathology',
  templateUrl: './cardio-localization-lesion-pathology.component.html',
  styleUrls: ['./cardio-localization-lesion-pathology.component.scss'],
  providers: [MakeProvider(CardioLocalizationLesionPathologyComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardioLocalizationLesionPathologyComponent extends LocalizerBase<LocalizationLesionPathology> {
  constructor() {
    super(LocalizationLesionPathology);
  }
}
