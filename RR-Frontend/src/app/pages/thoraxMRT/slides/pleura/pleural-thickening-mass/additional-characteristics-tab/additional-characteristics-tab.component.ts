import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { Subscription } from 'rxjs';
import { PleuraHelperService } from '../../pleura-helper.service';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { DisplacementOfAdiposeTissueTypeEnum } from '@enums/thoraxMRT/pleura/pleural-thickening-mass/displacement-of-adipose-tissue-type.enum';
import { CysticChangesTypeEnum } from '@enums/thoraxMRT/pleura/common/cystic-changes-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxMRT/pleura/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementPatternTypeEnum } from '@enums/thoraxMRT/pleura/common/contrast-enhancement-pattern-type.enum';

@Component({
  selector: 'rr-additional-characteristics-tab',
  templateUrl: './additional-characteristics-tab.component.html',
  styleUrls: ['./additional-characteristics-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdditionalCharacteristicsTabComponent implements OnDestroy {
  @Input() model: PleuraFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;
  isDWISubscription: Subscription;
  isDWISelected = false;
  displacementOfAdiposeTissueTypeEnum = DisplacementOfAdiposeTissueTypeEnum;

  cysticChangesTypeEnum = CysticChangesTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementPatternTypeEnum = ContrastEnhancementPatternTypeEnum;

  constructor(private pleuraHelperService: PleuraHelperService) {
    this.isCMYesSubscription = this.pleuraHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
    this.isDWISubscription = this.pleuraHelperService.isWeightingTypeDWI.subscribe(value => {
      this.isDWISelected = value;
    });
  }
  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
    this.isDWISubscription.unsubscribe();
  }
}
