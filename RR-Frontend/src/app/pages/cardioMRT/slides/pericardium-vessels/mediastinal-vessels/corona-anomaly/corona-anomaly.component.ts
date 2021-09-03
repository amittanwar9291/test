import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { CoronaryAnomalyTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-corona-anomaly',
  templateUrl: './corona-anomaly.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CoronaAnomalyComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  coronaryAnomalyType: typeof CoronaryAnomalyTypeEnum;

  constructor() {
    this.coronaryAnomalyType = CoronaryAnomalyTypeEnum;
  }
}
