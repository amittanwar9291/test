import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/neckMRT/thyroid/common/contrast-enhancement-distribution-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/neckMRT/thyroid/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/neckMRT/thyroid/common/homogeneity-type.enum';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-thyroid-characterization-two',
  templateUrl: './thyroid-characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThyroidCharacterizationTwoComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;

  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

  inputChange(): void {
    if (this.model.minInnerDiameterAxialInMm === null) {
      this.model.sagittalInMm = null;
      this.model.coronal = null;
    }
    if (this.model.sagittalInMm === null) {
      this.model.coronal = null;
    }
  }
}
