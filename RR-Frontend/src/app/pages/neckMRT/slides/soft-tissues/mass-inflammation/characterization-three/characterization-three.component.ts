import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { ContrastEnhancementQuantitativeTypeEnum, CystTypeEnum, HomogeneityTypeEnum } from '@enums/neckMRT/soft-tissues/mass-inflammation';

@Component({
  selector: 'rr-characterization-three',
  templateUrl: './characterization-three.component.html',
  styleUrls: ['./characterization-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationThreeComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() contrastEnhancementDistributionOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;

  cystType: typeof CystTypeEnum;
  contrastEnhancementQuantitativeType: typeof ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;

  constructor() {
    this.cystType = CystTypeEnum;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
  }

  isHomogeneityTypeDisabled(): boolean {
    return !(
      this.model.contrastEnhancementQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.Significant ||
      this.model.contrastEnhancementQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.Weak
    );
  }

  onIsOsteomyelitisMandible(): void {
    if (this.model.isOsteomyelitisMandible) {
      this.model.isOsteomyelitisCorpusMandibulae = false;
      this.model.isOsteomyelitisRamusMandibulae = false;
    }
  }

  onIsOsteolysisRamusMandibulae(): void {
    if (this.model.isOsteolysisMandible) {
      this.model.isOsteolysisCorpusMandibulae = false;
      this.model.isOsteolysisRamusMandibulae = false;
    }
  }
}
