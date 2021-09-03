import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-lymph-node-side-simple',
  templateUrl: './side-simple.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SideSimpleComponent {
  @Input() model: LymphNodesFindingUiModel;
  @Input() side: LocationTypeEnum;
  locationType = LocationTypeEnum;
}
