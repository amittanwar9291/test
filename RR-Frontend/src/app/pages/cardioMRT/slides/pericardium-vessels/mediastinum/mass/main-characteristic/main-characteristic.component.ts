import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { HomogenityTypeEnum, CmEnhancQuantiTypeEnum, PericardiumVesselsMarginTypeEnum } from '@enums/cardioMRT/pericardium-vessels';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-main-characteristic',
  templateUrl: './main-characteristic.component.html',
  styleUrls: ['./main-characteristic.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainCharacteristicComponent {
  @Input() model: PericardiumVesselsFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  pericardiumVesselsMarginType: typeof PericardiumVesselsMarginTypeEnum;
  homogenityType: typeof HomogenityTypeEnum;
  cmEnhancQuantiType: typeof CmEnhancQuantiTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.pericardiumVesselsMarginType = PericardiumVesselsMarginTypeEnum;
    this.homogenityType = HomogenityTypeEnum;
    this.cmEnhancQuantiType = CmEnhancQuantiTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  get isNoHomogenityTypeDisabled(): boolean {
    return [CmEnhancQuantiTypeEnum.No, CmEnhancQuantiTypeEnum.None].includes(this.model.cmEnhancQuantiType);
  }
}
