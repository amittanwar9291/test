import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  HomogeneityTypeEnum
} from '@enums/neckMRT/thyroid';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-salivary-characterization-three',
  templateUrl: './salivary-characterization-three.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryCharacterizationThreeComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
}
