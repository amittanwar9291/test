import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { AtlantooccipitalDistanceTypesEnum, SpinalCanalStenosisTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';

@Component({
  selector: 'rr-tab-arthritis',
  templateUrl: './tab-arthritis.component.html',
  styleUrls: ['./tab-arthritis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabArthritisComponent {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  atlantooccipitalDistanceTypesEnum = AtlantooccipitalDistanceTypesEnum;
  spinalCanalStenosisTypesEnum = SpinalCanalStenosisTypesEnum;
}
