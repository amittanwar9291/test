import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { DistalTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-distal-details',
  templateUrl: './distal-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DistalDetailsComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  distalType: typeof DistalTypeEnum;

  constructor() {
    this.distalType = DistalTypeEnum;
  }
}
