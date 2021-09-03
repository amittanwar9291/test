import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { ChronicBowelKmEnhancementFormTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/chronic-bowel-km-enhancement-form-type.enum';
import { ActivityTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/activity-type.enum';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-chronic-inflammatory-characterization-two',
  templateUrl: './chronic-inflammatory-characterization-two.component.html',
  styleUrls: ['./chronic-inflammatory-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicInflammatoryCharacterizationTwoComponent {
  @Input() model: RectumFindingUiModel;
  @Input() w030differentialDiagnosisList: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType: typeof KMEnhancementTypeEnum;
  chronicBowelKmEnhancementFormType: typeof ChronicBowelKmEnhancementFormTypeEnum;
  activityType: typeof ActivityTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.chronicBowelKmEnhancementFormType = ChronicBowelKmEnhancementFormTypeEnum;
    this.activityType = ActivityTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
  }

  resetDependantFields() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinated = false;
  }

  resetSubordinated() {
    this.model.isSubordinated = false;
  }
}
