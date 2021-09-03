import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum
} from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

@Component({
  selector: 'rr-peritoneal-mass-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;

  get isContrastEnhancementDistribution() {
    return [ContrastEnhancementQuantitativeTypeEnum.Low, ContrastEnhancementQuantitativeTypeEnum.Strong].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
