import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';

import { AorticValveTypeEnum, MitralValveTypeEnum } from '@enums/cardioMRT';

@Component({
  selector: 'rr-valve-replacement',
  templateUrl: './valve-replacement.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class ValveReplacementComponent {
  @Input() model: InterventionOrPreOpsFindingUiModel;

  aorticValveType: typeof AorticValveTypeEnum;
  mitralValveType: typeof MitralValveTypeEnum;

  constructor() {
    this.aorticValveType = AorticValveTypeEnum;
    this.mitralValveType = MitralValveTypeEnum;
  }
}
