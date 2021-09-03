import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  CmEnhancementDistributionTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  CortexTypeEnum,
  HomogeneityTypeEnum,
  LimitationTypeEnum,
  SecondLocalizationTypeEnum,
  SecondTumorDifferentialDiagnosisEnum,
  TumorDifferentialDiagnosisEnum
} from '@enums/shoulderMRT/bones';

import { omit } from 'lodash';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/shoulderMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-characterization-two-tumor',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationTwoComponent {
  @Input() model: BonesFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() differentialDiagnosisArray: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  secondLocalizationType: typeof SecondLocalizationTypeEnum;
  limitationType: typeof LimitationTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  cortexType: typeof CortexTypeEnum;
  cmEnhancementQuantitativeType: typeof CmEnhancementQuantitativeTypeEnum;
  cmEnhancementDistributionType: typeof CmEnhancementDistributionTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.secondLocalizationType = SecondLocalizationTypeEnum;
    this.limitationType = LimitationTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.cortexType = CortexTypeEnum;
    this.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum;
    this.cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  get isCMEnhancementDisabled(): boolean {
    return [CmEnhancementQuantitativeTypeEnum.No, CmEnhancementQuantitativeTypeEnum.None].includes(
      this.model.cMenhancementQuantitativeType
    );
  }

  clearSubordinated() {
    this.model.isSubordinated = false;
  }
}
