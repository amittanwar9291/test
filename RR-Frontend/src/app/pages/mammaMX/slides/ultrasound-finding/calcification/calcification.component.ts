import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';
import { CalcificationsTypeEnum } from '@enums/mammaMX/ultrasound-finding';

@Component({
  selector: 'rr-calcification',
  templateUrl: 'calcification.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CalcificationComponent {
  @Input() model: UltrasoundFindingSubfindingUiModel;

  calcificationsType = CalcificationsTypeEnum;
}
