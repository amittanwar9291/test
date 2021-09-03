import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { SoftPartsCalcificationTypeEnum } from '@enums/thoraxCT/soft-parts';

import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../../soft-parts-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-additional-characteristics-tab',
  templateUrl: './additional-characteristics-tab.component.html',
  styleUrls: ['./additional-characteristics-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdditionalCharacteristicsTabComponent implements OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  calcificationTypeEnum = SoftPartsCalcificationTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  constructor(private softPartsHelperService: SoftPartsHelperService) {
    this.isCMYesSubscription = this.softPartsHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }
}
