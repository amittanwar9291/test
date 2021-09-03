import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementPatternTypeEnum } from '@enums/thoraxMRT/pleura/common/contrast-enhancement-pattern-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxMRT/pleura/common/contrast-enhancement-quantitative-type.enum';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { Subscription } from 'rxjs';
import { PleuraHelperService } from '../../pleura-helper.service';

@Component({
  selector: 'rr-chest-wall-additional-characteristics-two',
  templateUrl: './chest-wall-additional-characteristics-two.component.html',
  styleUrls: ['./chest-wall-additional-characteristics-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallAdditionalCharacteristicsTwoComponent implements OnDestroy {
  @Input() model: PleuraFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementPatternTypeEnum = ContrastEnhancementPatternTypeEnum;
  constructor(private pleuraHelperService: PleuraHelperService) {
    this.isCMYesSubscription = this.pleuraHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }
}
