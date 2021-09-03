import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';
import { CerebrospinalFluidSpaceHelperService } from '../../cerebrospinal-fluid-space-helper.service';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';

@Component({
  selector: 'rr-mass-characterization-two-tab',
  templateUrl: './mass-characterization-two-tab.component.html',
  styleUrls: ['./mass-characterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationTwoTabComponent implements OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;

  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastDistributionTypeEnum = ContrastDistributionTypeEnum;

  constructor(private cerebrospinalFluidSpaceHelperService: CerebrospinalFluidSpaceHelperService) {
    this.isCMYesSubscription = cerebrospinalFluidSpaceHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Low, ContrastEnhancementQuantitativeTypeEnum.Strong].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
