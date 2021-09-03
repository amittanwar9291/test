import { Component, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

import { ContrastEnhancementDistributionTypeEnum } from '@enums/kneeMRT/bones/bones-tumor/contrast-enhancement-distribution-type.enum';

import {
  BonesLocalizationTypeEnum,
  LimitationTypeEnum,
  HomogeneityTypeEnum,
  CorticalisTypeEnum,
  ContrastEnhancementTypeEnum,
  BonesClassificationTypeEnum
} from '@enums/kneeMRT/bones/';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: KneeBonesFindingUiModel;
  @Input() diagnosisList1: DropdownModel[];
  @Input() descriptionArray: string[];
  @Input() isCMYes: boolean;

  bonesLocalizationType: typeof BonesLocalizationTypeEnum;
  limitationType: typeof LimitationTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  corticalisType: typeof CorticalisTypeEnum;
  contrastEnhancementType: typeof ContrastEnhancementTypeEnum;
  contrastHomogeneityType: typeof HomogeneityTypeEnum;
  bonesClassificationType: typeof BonesClassificationTypeEnum;
  contrastEnhancementDistributionType: typeof ContrastEnhancementDistributionTypeEnum;

  constructor() {
    this.bonesLocalizationType = BonesLocalizationTypeEnum;
    this.limitationType = LimitationTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.corticalisType = CorticalisTypeEnum;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum;
    this.contrastHomogeneityType = HomogeneityTypeEnum;
    this.bonesClassificationType = BonesClassificationTypeEnum;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
  }

  clearSubordinate() {
    this.model.isDifferentialDiagnosisSubordinate = false;
  }
}
