import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { ExtensionTypeEnum, StenosisTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-aorta',
  templateUrl: './aorta.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AortaComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  extensionType: typeof ExtensionTypeEnum;
  stenosisType: typeof StenosisTypeEnum;

  constructor() {
    this.extensionType = ExtensionTypeEnum;
    this.stenosisType = StenosisTypeEnum;
  }

  get isAortaMaxDiameterInMmEnabled(): boolean {
    return [this.model.isAorticRoot, this.model.isAscendingAorta, this.model.isAorticArch, this.model.isDescendingAorta].some(
      elem => !!elem
    );
  }

  resetAortaMaxDiameterInMm(): void {
    if (!this.isAortaMaxDiameterInMmEnabled) {
      this.model.aortaMaxDiameterInMm = null;
    }
  }
}
