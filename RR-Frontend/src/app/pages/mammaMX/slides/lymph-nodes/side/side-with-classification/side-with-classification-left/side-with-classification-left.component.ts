import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

import { ClassificationTypeEnum } from '@enums/mammaMX/lymph-nodes';

@Component({
  selector: 'rr-lymph-node-side-with-classification-left',
  templateUrl: './side-with-classification-left.component.html',
  styleUrls: ['./../../../lymph-nodes.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SideWithClassificationLeftComponent {
  @Input() model: LymphNodesFindingUiModel;
  classificationType = ClassificationTypeEnum;
}
