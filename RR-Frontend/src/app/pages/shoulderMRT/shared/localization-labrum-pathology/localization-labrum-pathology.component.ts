import { Component, ViewEncapsulation } from '@angular/core';

import { LocalizationLabrumPathology } from '@models/shoulderMRT/ui/localization-labrum-pathology/localization-labrum-pathology.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { LocalizationLabrumPathologyLocationsEnum } from '@enums/shoulderMRT/labrum-and-ribbons/localization-labrum-pathology-locations.enum';

@Component({
  selector: 'rr-localization-labrum-pathology',
  templateUrl: './localization-labrum-pathology.component.html',
  styleUrls: ['./localization-labrum-pathology.component.scss'],
  providers: [MakeProvider(LocalizationLabrumPathologyComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LocalizationLabrumPathologyComponent extends LocalizerBase<LocalizationLabrumPathology> {
  localizationLabrumPathologyLocations = LocalizationLabrumPathologyLocationsEnum;

  constructor() {
    super(LocalizationLabrumPathology);
  }
}
