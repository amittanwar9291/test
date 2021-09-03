import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { CysticPartsTypeEnum } from '@enums/headCT/meninges/cystic-parts-type.enum';
import { GrowthPatternTypeEnum } from '@enums/headCT/meninges/growth-pattern-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';
import { MeningesHelperService } from '../../meninges-helper.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';

@Component({
  selector: 'rr-mass-characterization-two',
  templateUrl: './mass-characterization-two.component.html',
  styleUrls: ['./mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationTwoComponent implements OnDestroy {
  @Input() model: MeningesFindingUiModel;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;

  cysticPartsTypeEnum = CysticPartsTypeEnum;
  growthPatternTypeEnum = GrowthPatternTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastDistributionTypeEnum;

  constructor(private meningesHelperService: MeningesHelperService) {
    this.isCMYesSubscription = meningesHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Low, ContrastEnhancementQuantitativeTypeEnum.Strong].includes(
      this.model.contrastEnhancementType
    );
  }
}
