import { Component, Input } from '@angular/core';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() isCMYes: boolean;

  sideTypeEnum = SideTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  isCmWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastQuantitativeType
    );
  }

  resetContrastDistributionTypeContainer(): void {
    if (
      (this.model.contrastQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.None ||
        this.model.contrastQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.No) &&
      !this.model.isDetectionOfLesion
    ) {
      this.model.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    }
  }
}
