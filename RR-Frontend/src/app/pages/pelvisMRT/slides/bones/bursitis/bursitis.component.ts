import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { SideTypeEnum } from '@enums/pelvisMRT/bones/bursitis/side-type.enum';
import { BursitisLimitationTypeEnum } from '@enums/pelvisMRT/bones/bursitis/bursitis-limitation-type.enum';
import { BursitisLocalizationTypeEnum } from '@enums/pelvisMRT/bones/bursitis/bursitis-localization-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/bones';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
@Component({
  selector: 'rr-bursitis',
  templateUrl: './bursitis.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BursitisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  sideType: typeof SideTypeEnum;
  localizationType: typeof BursitisLocalizationTypeEnum;
  limitationType: typeof BursitisLimitationTypeEnum;
  contrastEnhancementType: typeof ContrastEnhancementTypeEnum;
  homogenityType: typeof HomogeneityTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.sideType = SideTypeEnum;
    this.localizationType = BursitisLocalizationTypeEnum;
    this.limitationType = BursitisLimitationTypeEnum;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum;
    this.homogenityType = HomogeneityTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }
}
