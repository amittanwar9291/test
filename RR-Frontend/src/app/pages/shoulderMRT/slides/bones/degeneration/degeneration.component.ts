import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { DegenerationIntensityTypeEnum, DegenerationJointSurfacesTypeEnum, DegenerationOutbridgeTypeEnum } from '@enums/shoulderMRT/bones';

@Component({
  selector: 'rr-degeneration',
  templateUrl: './degeneration.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class DegenerationComponent {
  @Input() model: BonesFindingUiModel;

  degenerationIntensityType: typeof DegenerationIntensityTypeEnum;
  degenerationOutbridgeType: typeof DegenerationOutbridgeTypeEnum;
  degenerationJointSurfacesType: typeof DegenerationJointSurfacesTypeEnum;

  constructor() {
    this.degenerationIntensityType = DegenerationIntensityTypeEnum;
    this.degenerationOutbridgeType = DegenerationOutbridgeTypeEnum;
    this.degenerationJointSurfacesType = DegenerationJointSurfacesTypeEnum;
  }
}
