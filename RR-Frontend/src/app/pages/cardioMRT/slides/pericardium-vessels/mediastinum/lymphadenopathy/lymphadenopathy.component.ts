import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { EnlargedLymphNodesTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-lymphadenopathy',
  templateUrl: './lymphadenopathy.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphadenopathyComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  enlargedLymphNodesType: typeof EnlargedLymphNodesTypeEnum;

  constructor() {
    this.enlargedLymphNodesType = EnlargedLymphNodesTypeEnum;
  }
}
