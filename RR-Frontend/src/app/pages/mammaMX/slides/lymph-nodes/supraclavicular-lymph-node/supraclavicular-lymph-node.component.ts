import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-supraclavicular-lymph-node',
  templateUrl: './supraclavicular-lymph-node.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SupraclavicularLymphNodeComponent {
  @Input() model: LymphNodesFindingUiModel;
  locationType = LocationTypeEnum;
}
