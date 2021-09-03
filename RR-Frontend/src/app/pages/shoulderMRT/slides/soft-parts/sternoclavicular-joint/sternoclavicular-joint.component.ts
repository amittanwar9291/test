import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { SternoclavicularJointTypeEnum } from '@enums/shoulderMRT/soft-parts';

@Component({
  selector: 'rr-sternoclavicular-joint',
  templateUrl: './sternoclavicular-joint.component.html',
  styleUrls: ['../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SternoclavicularJointComponent {
  @Input() model: SoftPartsFindingUiModel;

  sternoclavicularJointType: typeof SternoclavicularJointTypeEnum;

  constructor() {
    this.sternoclavicularJointType = SternoclavicularJointTypeEnum;
  }
}
