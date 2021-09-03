import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CorticalThinningTypeEnum, ContrastEnhancementDistributionTypeEnum, HomogeneityTypeEnum } from '@enums/shared/head/cortex/common';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-diffuse-characterization-two',
  templateUrl: './diffuse-characterization-two.component.html',
  styleUrls: ['./diffuse-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationTwoComponent {
  @Input() model: CortexFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  subscriptions: Subscription[] = [];
  midlineShiftOptions: DropdownModel[];

  corticalThinningEnum = CorticalThinningTypeEnum;
  contrastEnhancementQuantitativeEnum = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionEnum = ContrastEnhancementDistributionTypeEnum;

  checkIfWeakOrSignificant(): boolean {
    return (
      this.model.contrastEnhancementType === ContrastEnhancementQuantitativeTypeEnum.Low ||
      this.model.contrastEnhancementType === ContrastEnhancementQuantitativeTypeEnum.Strong
    );
  }
}
