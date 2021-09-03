import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { DistributionTypeEnum } from '@enums/shoulderMRT/bones';

@Component({
  selector: 'rr-characterization-one-bone-marrow-edema',
  templateUrl: './characterization-one.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationOneComponent {
  @Input() model: BonesFindingUiModel;

  distributionType: typeof DistributionTypeEnum;

  constructor() {
    this.distributionType = DistributionTypeEnum;
  }

  get proximalerHumerusValidationProperties(): string {
    return 'isHillSachsLesion isReverseHillSachsLesion isHumeralHead isGreaterTubercle isLesserTubercle';
  }

  get lateralClavicleValidationProperties(): string {
    return 'isAcromialEnd isClavicularBody isExtremitasClaviculae';
  }

  get scapulaValidationProperties(): string {
    return 'isAkromion isProcessusCoracoideus isScapularSpine isSupraspinatousFossa isGlenoidFossa isInfraspinatousFossa';
  }

  get isDistributionAndAssociatedFindingsEnabled(): boolean {
    const numberOfSelectedCheckboxes = [this.model.isProximalerHumerus, this.model.isLateralClavicle, this.model.isScapula].filter(Boolean)
      .length;
    return numberOfSelectedCheckboxes === 1;
  }

  clearDistributionAndAssociatedFindings(): void {
    if (!this.isDistributionAndAssociatedFindingsEnabled) {
      this.model.distributionType = DistributionTypeEnum.None;
      this.model.isSoftTissueEdema = false;
      this.model.isThickenedAndEdematizedSynovialis = false;
    }
  }
}
