import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaCalcificationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-calcification-type.enum';
import { HomogeneityTypeEnum } from '@enums/thoraxCT/common/homogeneity-type.enum';
import { LungParenchymaHelperService } from '../../lung-parenchyma-helper.service';
import { Subscription } from 'rxjs';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-nodule-characterization-two-tab',
  templateUrl: './nodule-characterization-two-tab.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NoduleCharacterizationTwoTabComponent implements OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;
  lungParenchymaCalcificationTypeEnum = LungParenchymaCalcificationTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private lungParenchymaHelperService: LungParenchymaHelperService) {
    this.isCMYesSubscription = this.lungParenchymaHelperService.isCM.subscribe(v => (this.isCMYes = v === SimpleAnswerEnum.Yes));
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  shouldHomogeneityTypeEnumContainerBeActive(): boolean {
    return [this.contrastEnhancementQuantitativeTypeEnum.Marked, this.contrastEnhancementQuantitativeTypeEnum.Minimal].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
