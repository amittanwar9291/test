import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum
} from '@enums/hipMRT/capsule-and-ligaments/synovia-mass';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: CapsuleAndLigamentsFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() diffDiagnosisFullOptions: DropdownModel[];
  @Input() diffDiagnosisRestrictedOptions: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  contrastEnhancementQuantitativeType: typeof ContrastEnhancementQuantitativeTypeEnum;
  pronouncedHomogeneityType: typeof HomogeneityTypeEnum;
  contrastEnhancementDistributionType: typeof ContrastEnhancementDistributionTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
    this.pronouncedHomogeneityType = HomogeneityTypeEnum;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
  }
}
