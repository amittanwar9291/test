import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/neckMRT/thyroid/common/contrast-enhancement-distribution-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/neckMRT/thyroid/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/neckMRT/thyroid/common/homogeneity-type.enum';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-parathyroid-characterization-two',
  templateUrl: './parathyroid-characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParathyroidCharacterizationTwoComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isCMReinforced: boolean;

  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
  cmHomogeneityType = HomogeneityTypeEnum;

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
