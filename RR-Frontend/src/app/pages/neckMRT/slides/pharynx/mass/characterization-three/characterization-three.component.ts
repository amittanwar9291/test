import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  CystTypeEnum,
  CmEnhancementDistributionTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum
} from '@enums/neckMRT/pharynx';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';

@Component({
  selector: 'rr-characterization-three',
  templateUrl: './characterization-three.component.html',
  styleUrls: ['../mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationThreeComponent {
  @Input() model: PharynxFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWI: boolean;

  cystType = CystTypeEnum;
  cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum;

  areCmEnhancementQuantitativeTypeDependentControlsDisabled(): boolean {
    return !(
      this.model.cmEnhancementQuantitativeType === CmEnhancementQuantitativeTypeEnum.Significant ||
      this.model.cmEnhancementQuantitativeType === CmEnhancementQuantitativeTypeEnum.Weak
    );
  }
}
