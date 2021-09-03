import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastEnhancementQuantitativeType,
  ContrastEnhancementDistributionTypeEnum,
  CorticalisTypeEnum,
  LimitationTypeEnum
} from '@enums/elbowMRT/bones';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService } from '../../bones-helper.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: BonesFindingUiModel;
  isCMYes: boolean;

  limitationTypeEnum = LimitationTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  corticalisTypeEnum = CorticalisTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  constructor(private bonesHelperService: BonesHelperService) {
    this.bonesHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }
}
