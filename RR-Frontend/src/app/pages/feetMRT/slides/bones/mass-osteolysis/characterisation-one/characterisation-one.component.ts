import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastAgentEnhancementFormTypeEnum,
  ContrastAgentEnhancementTypeEnum,
  CortexTypeEnum
} from '@enums/feetMRT/bones/space-requirement';
import { BonesHomogeneityTypeEnum } from '@enums/feetMRT/bones/space-requirement/bones-homogeneity-type.enum';
import { BonesLimitationTypeEnum } from '@enums/feetMRT/bones/space-requirement/bones-limitation-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService } from '../../bones-helper.service';

@Component({
  selector: 'rr-tumor-characterisation-one',
  templateUrl: './characterisation-one.component.html',
  styleUrls: ['./characterisation-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterisationOneComponent {
  @Input() model: BonesFindingUiModel;

  isCmYes: boolean;

  bonesHomogeneityTypeEnum: typeof BonesHomogeneityTypeEnum;
  bonesLimitationTypeEnum: typeof BonesLimitationTypeEnum;
  cortexTypeEnum: typeof CortexTypeEnum;
  contrastAgentEnhancementFormTypeEnum: typeof ContrastAgentEnhancementFormTypeEnum;
  contrastAgentEnhancementTypeEnum: typeof ContrastAgentEnhancementTypeEnum;
  descriptionTypeEnum: typeof DescriptionTypeEnum;

  constructor(private bonesHelperService: BonesHelperService) {
    this.initializeEnums();

    this.isCmYes = this.bonesHelperService.isCMYes.value;
  }

  private initializeEnums() {
    this.bonesHomogeneityTypeEnum = BonesHomogeneityTypeEnum;
    this.bonesLimitationTypeEnum = BonesLimitationTypeEnum;
    this.cortexTypeEnum = CortexTypeEnum;
    this.contrastAgentEnhancementFormTypeEnum = ContrastAgentEnhancementFormTypeEnum;
    this.contrastAgentEnhancementTypeEnum = ContrastAgentEnhancementTypeEnum;
    this.descriptionTypeEnum = DescriptionTypeEnum;
  }

  isKmSubgroupDisabled() {
    return (
      this.model.contrastAgentEnhancementType === ContrastAgentEnhancementTypeEnum.None ||
      this.model.contrastAgentEnhancementType === ContrastAgentEnhancementTypeEnum.No
    );
  }

  isKmDistributionDisabled() {
    return !this.isCmYes || this.isKmSubgroupDisabled();
  }
}
