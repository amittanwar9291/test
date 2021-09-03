import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';

@Component({
  selector: 'rr-temporal-bone-characterization-two',
  templateUrl: './temporal-bone-characterization-two.component.html',
  styleUrls: ['./temporal-bone-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemporalBoneCharacterizationTwoComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private facialSkullHelperService: FacialSkullHelperService) {
    this.isCMYesSubscription = this.facialSkullHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  ngOnDestroy(): void {
    this.isCMYesSubscription.unsubscribe();
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastEnhancementType
    );
  }
}
