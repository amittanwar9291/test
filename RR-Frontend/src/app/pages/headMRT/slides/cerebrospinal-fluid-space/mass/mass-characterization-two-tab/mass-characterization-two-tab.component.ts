import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { Subscription } from 'rxjs';
import { CerebrospinalFluidSpaceHelperService } from '../../cerebrospinal-fluid-space-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

@Component({
  selector: 'rr-mass-characterization-two-tab',
  templateUrl: './mass-characterization-two-tab.component.html',
  styleUrls: ['./mass-characterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationTwoTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private cerebrospinalFluidSpaceHelperService: CerebrospinalFluidSpaceHelperService) {
    this.isCMYesSubscription = this.cerebrospinalFluidSpaceHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType = HomogeneityTypeEnum;
  contrastDistributionType = ContrastEnhancementDistributionTypeEnum;

  checkIfWeakOrSignificant(): boolean {
    return (
      this.model.contrastEnhancementQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.Weak ||
      this.model.contrastEnhancementQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.Significant
    );
  }

  resetContrastDistribution() {
    if (!this.checkIfWeakOrSignificant()) {
      this.model.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    }
  }
}
