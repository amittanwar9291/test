import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { PenetrationOfPseudocapsuleTypeEnum } from '@enums/pelvisMRT/prostate/penetration-of-pseudocapsule-type.enum';
import { DynamicContrastEnhancedTypeEnum } from '@enums/pelvisMRT/prostate/dynamic-contrast-enhanced-type.enum';
import { DceMrtNegativeTypeEnum } from '@enums/pelvisMRT/prostate/dce-mrt-negative-type.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ExtraprostaticGrowthTypeEnum } from '@enums/pelvisMRT/prostate/extraprostatic-growth-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: ProstateFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  penetrationOfPseudocapsuleType: typeof PenetrationOfPseudocapsuleTypeEnum;
  extraprostaticGrowthType: typeof ExtraprostaticGrowthTypeEnum;
  dynamicContrastEnhancedType: typeof DynamicContrastEnhancedTypeEnum;
  dceMrtNegativeType: typeof DceMrtNegativeTypeEnum;
  directionType: typeof DirectionTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.penetrationOfPseudocapsuleType = PenetrationOfPseudocapsuleTypeEnum;
    this.extraprostaticGrowthType = ExtraprostaticGrowthTypeEnum;
    this.dynamicContrastEnhancedType = DynamicContrastEnhancedTypeEnum;
    this.dceMrtNegativeType = DceMrtNegativeTypeEnum;
    this.directionType = DirectionTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  clearDceMrtNegativeType(value): string {
    return this.model.dynamicContrastEnhancedType !== value ? 'dceMrtNegativeType' : '';
  }

  clearPenetrationOfPseudocapsuleCheckboxes(value): string {
    return this.model.extraprostaticGrowthType !== value
      ? 'penetrationOfPseudocapsuleCheckboxes infiltrationOfAdjacentStructuresDetails infiltrationOfAdjacentStructuresDetails2'
      : '';
  }
}
