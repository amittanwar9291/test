import { Component, Input, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { CardioSingleColorLocalizer } from '@models/cardioMRT/ui/left-ventricle/cardio-single-color-localizer-ui.model';

@Component({
  selector: 'rr-cardio-circle-editable-singlecolor-localizer',
  templateUrl: './cardio-circle-editable-singlecolor-localizer.component.html',
  styleUrls: ['./cardio-circle-editable-singlecolor-localizer.component.scss'],
  providers: [MakeProvider(CardioCircleEditableSinglecolorLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardioCircleEditableSinglecolorLocalizerComponent extends LocalizerBase<CardioSingleColorLocalizer> {
  @Input() caption: string;
  @Input() checkedColor: string;

  constructor() {
    super(CardioSingleColorLocalizer);
  }

  toggleSection(sectionNumber: number) {
    this.selectElement(`section${sectionNumber}`);
  }

  getColor(sectionNumber: number) {
    if (this.ngValue[`section${sectionNumber}`]) {
      return this.checkedColor;
    }
  }
}
