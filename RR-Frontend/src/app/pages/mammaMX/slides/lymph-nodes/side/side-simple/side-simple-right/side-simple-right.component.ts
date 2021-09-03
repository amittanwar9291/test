import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

@Component({
  selector: 'rr-lymph-node-side-simple-right',
  templateUrl: './side-simple-right.component.html',
  styleUrls: ['./../../../lymph-nodes.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SideSimpleRightComponent {
  @Input() model: LymphNodesFindingUiModel;
}
