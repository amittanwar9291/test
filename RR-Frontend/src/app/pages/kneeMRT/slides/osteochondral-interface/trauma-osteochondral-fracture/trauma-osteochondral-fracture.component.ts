import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import {
  AssociatedFindingTypeEnum,
  DetectionJointMouseLocalizationTypeEnum,
  StageTypeEnum
} from '@enums/kneeMRT/osteochondral-interface/trauma-osteochondral-fracture';

@Component({
  selector: 'rr-trauma-osteochondral-fracture',
  templateUrl: './trauma-osteochondral-fracture.component.html',
  styleUrls: ['./../osteochondral-interface.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class TraumaOsteochondralFractureComponent {
  @Input() model: OsteochondralInterfaceFindingUiModel;

  stageType: typeof StageTypeEnum;
  detectionJointMouseLocalizationType: typeof DetectionJointMouseLocalizationTypeEnum;
  associatedFindingType: typeof AssociatedFindingTypeEnum;

  constructor() {
    this.stageType = StageTypeEnum;
    this.detectionJointMouseLocalizationType = DetectionJointMouseLocalizationTypeEnum;
    this.associatedFindingType = AssociatedFindingTypeEnum;
  }
}
