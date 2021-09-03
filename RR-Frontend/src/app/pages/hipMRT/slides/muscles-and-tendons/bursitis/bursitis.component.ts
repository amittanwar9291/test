import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';

import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { BursitisLocalizationTypeEnum, BursitisMarginTypeEnum } from '@enums/hipMRT/muscles-and-tendons';

@Component({
  selector: 'rr-bursitis',
  templateUrl: './bursitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BursitisComponent {
  @Input() model: MusclesAndTendonsFindingUiModel;

  sideType = DirectionTypeEnum;
  bursitisLocalizationType = BursitisLocalizationTypeEnum;
  bursitisMarginType = BursitisMarginTypeEnum;
}
