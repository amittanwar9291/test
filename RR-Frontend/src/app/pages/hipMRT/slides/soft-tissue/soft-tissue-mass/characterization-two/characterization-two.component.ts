import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

import { HomogeneityTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum, ContrastEnhancementQuantitativeTypeEnum } from '@enums/hipMRT/soft-tissue';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() isCMReinforced: boolean;

  contrastEnhancementQuantitativeType: typeof ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType: typeof ContrastEnhancementDistributionTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum;

  constructor() {
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
    this.homogeneityTypeEnum = HomogeneityTypeEnum;
  }

  isContrastEnhancementQuantitativeTypeNoneOrNo(): boolean {
    const allowedValues = [ContrastEnhancementQuantitativeTypeEnum.Low, ContrastEnhancementQuantitativeTypeEnum.Pronounced];
    return !allowedValues.includes(this.model.contrastEnhancementQuantitativeType);
  }
}
