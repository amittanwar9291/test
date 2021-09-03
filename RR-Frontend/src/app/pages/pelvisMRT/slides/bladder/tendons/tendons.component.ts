import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import {
  TendonsLocalizationTypeEnum,
  TendonsPathologyTypeEnum,
  DetailsRuptureLocalizationTypeEnum,
  MorphologyTendinopathyTypeEnum
} from '@enums/pelvisMRT/bladder';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-tendons',
  templateUrl: './tendons.component.html',
  styleUrls: ['./tendons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendonsComponent {
  @Input() model: BladderFindingUiModel;

  tendonsLocalizationTypeEnum = TendonsLocalizationTypeEnum;
  sideTypeEnum = SideTypeEnum;
  tendonsPathologyTypeEnum = TendonsPathologyTypeEnum;
  detailsRuptureLocalizationTypeEnum = DetailsRuptureLocalizationTypeEnum;
  morphologyTendinopathyTypeEnum = MorphologyTendinopathyTypeEnum;
}
