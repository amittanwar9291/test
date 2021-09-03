import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';

import { KnownTypeEnum, StatusTypeEnum } from '@enums/cardioMRT';

@Component({
  selector: 'rr-coronary-heart-disease',
  templateUrl: 'coronary-heart-disease.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CoronaryHeartDiseaseComponent {
  @Input() model: IndicationFindingUiModel;

  statusType: typeof StatusTypeEnum;
  knownType: typeof KnownTypeEnum;

  constructor() {
    this.statusType = StatusTypeEnum;
    this.knownType = KnownTypeEnum;
  }
}
