import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';
import { Subscription } from 'rxjs';
import { BrainstemCranialNervesHelperService } from '../../brainstem-cranial-nerves-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization-two-cranial-nerves',
  templateUrl: './characterization-two-cranial-nerves.component.html',
  styleUrls: ['./characterization-two-cranial-nerves.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoCranialNervesComponent {
  @Input() model: BrainstemCranialNervesFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private brainstemCranialNervesHelperService: BrainstemCranialNervesHelperService) {
    this.isCMYesSubscription = this.brainstemCranialNervesHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  sideType = SideTypeEnum;
  contrastQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
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
