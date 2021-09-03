import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import {
  ClassificationTypeEnum,
  DetectionDissekatTypeEnum,
  EpiphysealJointTypeEnum
} from '@enums/kneeMRT/osteochondral-interface/osteochondrosis-dissecans';

@Component({
  selector: 'rr-osteochondrosis-dissecans',
  templateUrl: './osteochondrosis-dissecans.component.html',
  styleUrls: ['./../osteochondral-interface.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class OsteochondrosisDissecansComponent {
  @Input() model: OsteochondralInterfaceFindingUiModel;

  classificationType: typeof ClassificationTypeEnum;
  detectionDissekatType: typeof DetectionDissekatTypeEnum;
  epiphysealJointType: typeof EpiphysealJointTypeEnum;

  constructor() {
    this.classificationType = ClassificationTypeEnum;
    this.detectionDissekatType = DetectionDissekatTypeEnum;
    this.epiphysealJointType = EpiphysealJointTypeEnum;
  }
}
