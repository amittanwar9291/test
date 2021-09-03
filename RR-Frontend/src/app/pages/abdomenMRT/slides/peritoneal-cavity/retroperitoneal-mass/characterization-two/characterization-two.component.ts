import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  GrowthPatternsTypeEnum
} from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';

@Component({
  selector: 'rr-retroperitoneal-mass-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isDWI: boolean;
  @Input() isContrastEnhanced: boolean;

  growthPatternsType = GrowthPatternsTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;

  get isContrastEnhancementQuantitativeBlock() {
    return [ContrastEnhancementQuantitativeTypeEnum.Strong, ContrastEnhancementQuantitativeTypeEnum.Low].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
