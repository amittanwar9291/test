import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { MediastinalVesselsTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-mediastinal-vessels',
  templateUrl: './mediastinal-vessels.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MediastinalVesselsComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  mediastinalVesselsType: typeof MediastinalVesselsTypeEnum;

  constructor() {
    this.mediastinalVesselsType = MediastinalVesselsTypeEnum;
  }

  get coronaryAnomalyValidationProperties(): string {
    return 'coronaAnomaly-block originDetails-block distalDetails-block ';
  }
}
