import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-axillary-lymph-node',
  templateUrl: './axillary-lymph-node.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class AxillaryLymphNodeComponent {
  @Input() model: LymphNodesFindingUiModel;
  locationType = LocationTypeEnum;
}
