import { Component, Input } from '@angular/core';

import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';

import { ColorsEnum } from '@enums/cardioMRT/left-ventricle/colors.enum';

@Component({
  selector: 'rr-cardio-three-circles',
  templateUrl: './cardio-three-circles.component.html',
  styleUrls: ['./cardio-three-circles.component.scss']
})
export class CardioThreeCirclesComponent {
  @Input() model: LeftVentricleUiModel;

  // TODO move the colors list to some enum
  colors = {
    purple: ColorsEnum.Purple,
    turquoise: ColorsEnum.Turquoise,
    blue: ColorsEnum.Blue,
    yellow: ColorsEnum.Yellow
  };

  constructor() {}
}
