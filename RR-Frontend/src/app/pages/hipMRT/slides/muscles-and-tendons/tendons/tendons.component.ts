import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';

import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import {
  RuptureLocalizationTypeEnum,
  TendonsLocalizationTypeEnum,
  TendonsMorphologyTypeEnum,
  TendonsPathologyTypeEnum
} from '@enums/hipMRT/muscles-and-tendons';

@Component({
  selector: 'rr-tendons',
  templateUrl: './tendons.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendonsComponent {
  @Input() model: MusclesAndTendonsFindingUiModel;

  sideType = DirectionTypeEnum;
  tendonsLocalizationType = TendonsLocalizationTypeEnum;
  tendonsPathologyType = TendonsPathologyTypeEnum;
  ruptureLocalizationType = RuptureLocalizationTypeEnum;
  tendonsMorphologyType = TendonsMorphologyTypeEnum;
}
