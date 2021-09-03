import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { FormTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/form-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/pelvisMRT/ui/technology/sequence-ui.model';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { GrowthPatternTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/growth-pattern-type.enum';
import { InternalChangeTypeEnum } from '@enums/pelvisMRT/rectum/common/internal-change-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/rectum/common/margin-type.enum';

@Component({
  selector: 'rr-sigma-mass-characterization-one',
  templateUrl: './sigma-mass-characterization-one.component.html',
  styleUrls: ['./sigma-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmaMassCharacterizationOneComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  kmEnhancementTypeEnum: typeof KMEnhancementTypeEnum;
  growthPatternTypeEnum: typeof GrowthPatternTypeEnum;
  internalChangeTypeEnum: typeof InternalChangeTypeEnum;
  formTypeEnum: typeof FormTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;
  marginType: typeof MarginTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.kmEnhancementTypeEnum = KMEnhancementTypeEnum;
    this.growthPatternTypeEnum = GrowthPatternTypeEnum;
    this.internalChangeTypeEnum = InternalChangeTypeEnum;
    this.formTypeEnum = FormTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
    this.marginType = MarginTypeEnum;
  }

  isSequencesInstanceName(): boolean {
    return (
      this.technologyModel && this.technologyModel.sequences.filter((model: SequenceUiModel) => model.weightingType === 'DWI').length > 0
    );
  }
}
