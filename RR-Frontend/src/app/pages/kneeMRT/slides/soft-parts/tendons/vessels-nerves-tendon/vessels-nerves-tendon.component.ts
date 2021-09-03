import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import {
  CmEnhancementTypeEnum,
  HomogeneityTypeEnum,
  VesselsNervesLocalizationTypeEnum,
  VesselsNervesTypeEnum
} from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-vessels-nerves-tendon',
  templateUrl: './vessels-nerves-tendon.component.html',
  styleUrls: ['./vessels-nerves-tendon.component.scss', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesselsNervesTendonComponent {
  @Input() model: SoftPartsFindingUiModel;
  @Input() isCMReinforcedTypeYes: boolean;

  vesselsNervesTypeEnum: typeof VesselsNervesTypeEnum;
  cmEnhancementTypeEnum: typeof CmEnhancementTypeEnum;
  vesselsNervesLocalizationTypeEnum: typeof VesselsNervesLocalizationTypeEnum;
  vesselsNervesHomogeneityTypeEnum: typeof HomogeneityTypeEnum;

  constructor() {
    this.vesselsNervesTypeEnum = VesselsNervesTypeEnum;
    this.cmEnhancementTypeEnum = CmEnhancementTypeEnum;
    this.vesselsNervesLocalizationTypeEnum = VesselsNervesLocalizationTypeEnum;
    this.vesselsNervesHomogeneityTypeEnum = HomogeneityTypeEnum;
  }
}
