import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { PartialAnomalousTypeEnum, PulmonaryVariantsTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-pulmonary-veins',
  templateUrl: './pulmonary-veins.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PulmonaryVeinsComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  pulmonaryVariantsType: typeof PulmonaryVariantsTypeEnum;
  partialAnomalousType: typeof PartialAnomalousTypeEnum;

  constructor() {
    this.pulmonaryVariantsType = PulmonaryVariantsTypeEnum;
    this.partialAnomalousType = PartialAnomalousTypeEnum;
  }
}
