import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/handMRT/soft-tissue/contrast-enhancement-distribution-type.enum';
import { TechnologyUiModel } from '@models/handMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CMEnhancementTypeEnum } from '@enums/handMRT/soft-tissue/cm-enhancement-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  homogeneityType: typeof HomogeneityTypeEnum;
  cMEnhancementType: typeof CMEnhancementTypeEnum;
  simpleAnswer: typeof SimpleAnswerEnum;
  contrastEnhancementDistributionType: typeof ContrastEnhancementDistributionTypeEnum;
  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.homogeneityType = HomogeneityTypeEnum;
    this.cMEnhancementType = CMEnhancementTypeEnum;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
    this.simpleAnswer = SimpleAnswerEnum;
  }
}
