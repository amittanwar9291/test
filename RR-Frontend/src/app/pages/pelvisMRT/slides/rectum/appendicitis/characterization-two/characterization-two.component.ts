import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { InternalChangeTypeEnum } from '@enums/pelvisMRT/rectum/common/internal-change-type.enum';
import { InternalChangeSubTypeEnum } from '@enums/pelvisMRT/rectum/appendagitis/internal-change-sub-type.enum';
import { AppendicitisInflammationStageTypeEnum } from '@enums/pelvisMRT/rectum/appendagitis/appendicitis-inflammation-stage-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-appendicitis-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppengicitisCharacterizationTwoComponent {
  @Input() model: RectumFindingUiModel;
  @Input() differentialDiagnosisAppendictisList: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType = KMEnhancementTypeEnum;
  internalChangeType = InternalChangeTypeEnum;
  internalChangeSubType = InternalChangeSubTypeEnum;
  appendicitisInflammationStageType = AppendicitisInflammationStageTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  cmReinforcedType = SimpleAnswerEnum;

  clearSubordinated() {
    if (this.model.appendictisDifferentialDiagnosisType === DifferentialDiagnosisTypeEnum.None) {
      this.model.isSubordinated = false;
    }
  }
}
