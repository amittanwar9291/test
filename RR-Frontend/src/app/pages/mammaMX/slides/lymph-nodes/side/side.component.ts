import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-lymph-node-side',
  templateUrl: './side.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SideComponent {
  @Input() model: LymphNodesFindingUiModel;
  @Input() isRight: boolean;
  @Input() side: LocationTypeEnum;
  @Input() hasClassification = false;
}
