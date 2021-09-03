import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FatTypeEnum, GrowthPatternTypeEnum } from '@enums/headMRT/meninges';
import { CystTypeEnum } from '@enums/headMRT/meninges';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  fatType = FatTypeEnum;
  cystType = CystTypeEnum;
  growthPatternType = GrowthPatternTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
}
