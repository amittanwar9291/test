import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

@Component({
  selector: 'rr-lymph-node-side-simple-left',
  templateUrl: './side-simple-left.component.html',
  styleUrls: ['./../../../lymph-nodes.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SideSimpleLeftComponent {
  @Input() model: LymphNodesFindingUiModel;
}
