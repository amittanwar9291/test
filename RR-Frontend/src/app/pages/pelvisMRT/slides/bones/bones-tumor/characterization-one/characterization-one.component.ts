import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import {
  LimitationTypeEnum,
  CorticalisTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  TClassificationTypeEnum,
  BonesDiagnosisTypeEnum
} from '@enums/pelvisMRT/bones/tumor';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/bones';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: BonesFindingUiModel;
  @Input() diagnosisList1: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;

  limitationType = LimitationTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  corticalisType = CorticalisTypeEnum;
  contrastEnhancementType = ContrastEnhancementTypeEnum;
  contrastHomogeneityType = HomogeneityTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
  simpleAnswerType = SimpleAnswerEnum;

  clearDependntFields() {
    if (!this.classificationTypeEnable()) {
      this.model.classificationType = TClassificationTypeEnum.None;
    }
    this.model.isSubordinated = false;
  }

  classificationTypeEnable(): boolean {
    const referenceList = [BonesDiagnosisTypeEnum.EwingSarcoma, BonesDiagnosisTypeEnum.Osteosarcoma, BonesDiagnosisTypeEnum.Chondrosarcoma];
    return (
      this.model.descriptionType === DescriptionTypeEnum.IKnow &&
      (referenceList.includes(this.model.differentialDiagnosis) ||
        referenceList.includes(this.model.differentialDiagnosis3) ||
        referenceList.includes(this.model.differentialDiagnosis2))
    );
  }
}
