import { Component, Input } from '@angular/core';

import { LocalizerPositionEnum } from '@enums/cardioMRT/left-ventricle/localizer-position.enum';

@Component({
  selector: 'rr-cardio-localizer-positioner-header',
  templateUrl: './cardio-localizer-positioner-header.component.html',
  styleUrls: ['./cardio-localizer-positioner-header.component.scss']
})
export class CardioLocalizerPositionerHeaderComponent {
  @Input() activePosition: string;
  @Input() caption: string;
  @Input() labelRRID: string;
  @Input() positionerRRID: string;
  @Input() threeCirclesMode: boolean;

  localizerPosition: typeof LocalizerPositionEnum;

  constructor() {
    this.localizerPosition = LocalizerPositionEnum;
  }
}
