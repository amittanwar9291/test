import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';

import { MedialPatelloFemoralRuptureTypeEnum, PatellaPositionTypeEnum } from '@enums/kneeMRT/patella/rupture-medial-retinaculum';

@Component({
  selector: 'rr-rupture-medial-retinaculum',
  templateUrl: './rupture-medial-retinaculum.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class RuptureMedialRetinaculumComponent {
  @Input() model: PatellaFindingUiModel;

  medialPatelloFemoralRuptureType: typeof MedialPatelloFemoralRuptureTypeEnum;
  patellaPositionType: typeof PatellaPositionTypeEnum;

  constructor() {
    this.medialPatelloFemoralRuptureType = MedialPatelloFemoralRuptureTypeEnum;
    this.patellaPositionType = PatellaPositionTypeEnum;
  }
}
