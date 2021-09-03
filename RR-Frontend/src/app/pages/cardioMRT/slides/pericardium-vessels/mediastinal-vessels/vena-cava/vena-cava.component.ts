import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { InferiorVariantsTypeEnum, SuperiorVariantsTypeEnum, VenaCavaTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-vena-cava',
  templateUrl: './vena-cava.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VenaCavaComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  venaCavaType: typeof VenaCavaTypeEnum;
  superiorVariantsType: typeof SuperiorVariantsTypeEnum;
  inferiorVariantsType: typeof InferiorVariantsTypeEnum;

  constructor() {
    this.venaCavaType = VenaCavaTypeEnum;
    this.superiorVariantsType = SuperiorVariantsTypeEnum;
    this.inferiorVariantsType = InferiorVariantsTypeEnum;
  }
}
