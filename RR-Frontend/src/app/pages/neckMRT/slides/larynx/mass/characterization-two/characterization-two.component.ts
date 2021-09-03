import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import { CystsTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { CmDistributionTypeEnum, CmQuantitativeTypeEnum, HomogeneityTypeEnum } from '@enums/neckMRT/larynx';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: LarynxFindingUiModel;
  @Input() isCMReinforced: boolean; // TODO make page connection
  @Input() isDWI: boolean;

  cystType: typeof CystsTypeEnum;
  cmQuantitativeType: typeof CmQuantitativeTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  cmDistributionType: typeof CmDistributionTypeEnum;

  constructor() {
    this.cystType = CystsTypeEnum;
    this.cmQuantitativeType = CmQuantitativeTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.cmDistributionType = CmDistributionTypeEnum;
  }

  isCmDistributionTypeNoneOrNo(): boolean {
    const allowedValues = [CmQuantitativeTypeEnum.Mild, CmQuantitativeTypeEnum.Pronounced];
    return !allowedValues.includes(this.model.cmQuantitativeType);
  }
}
