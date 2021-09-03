import { Component, Input, ViewEncapsulation } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { CardioSingleColorLocalizer } from '@models/cardioMRT/ui/left-ventricle/cardio-single-color-localizer-ui.model';

@Component({
  selector: 'rr-cardio-circle-static-singlecolor-localizer',
  templateUrl: './cardio-circle-static-singlecolor-localizer.component.html',
  styleUrls: ['./cardio-circle-static-singlecolor-localizer.component.scss'],
  providers: [MakeProvider(CardioCircleStaticSinglecolorLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardioCircleStaticSinglecolorLocalizerComponent {
  @Input() caption: string;
  @Input() checkedColor: string;
  @Input() circleLocation: CardioSingleColorLocalizer;
}
