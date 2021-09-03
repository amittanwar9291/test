import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { SoftPartsLocalizationCraniocaudalTypeEnum, SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { PleuralThickeningLocalizationTypeEnum } from '@enums/thoraxCT/soft-parts/pleural-thickening';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../../soft-parts-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-thickening-main-characteristics',
  templateUrl: './thickening-main-characteristics.component.html',
  styleUrls: ['./thickening-main-characteristics.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThickeningMainCharacteristicsComponent implements OnDestroy {
  @Input() findings: SoftPartsFindingUiModel[];
  @Input() model: SoftPartsFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  siteTypeEnum = SoftPartsSiteTypeEnum;
  localizationTypeEnum = PleuralThickeningLocalizationTypeEnum;
  localizationCraniocaudalTypeEnum = SoftPartsLocalizationCraniocaudalTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  constructor(public softPartsHelperService: SoftPartsHelperService) {
    this.isCMYesSubscription = this.softPartsHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }
}
