import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { HeterogeneousTypeEnum, SoftPartsGrowthPatternsTypeEnum } from '@enums/thoraxCT/soft-parts/chest-wall-soft-tissue';

import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../../soft-parts-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-chest-wall-additional-characteristics',
  templateUrl: './chest-wall-additional-characteristics.component.html',
  styleUrls: ['./chest-wall-additional-characteristics.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallAdditionalCharacteristicsComponent implements OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  growthPatternsTypeEnum = SoftPartsGrowthPatternsTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  heterogeneousTypeEnum = HeterogeneousTypeEnum;

  constructor(private softPartsHelperService: SoftPartsHelperService) {
    this.isCMYesSubscription = this.softPartsHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }
}
