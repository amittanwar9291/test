import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { RotatorFindingUiModel } from '@models/shoulderMRT/ui/rotator/rotator-finding-ui.model';

import { AcJointClassificationTypeEnum, AfflicationTypeEnum, RockwoodTypeEnum, TossyTypeEnum } from '@enums/shoulderMRT/rotator/ac-joint';

@Component({
  selector: 'rr-ac-joint',
  templateUrl: './ac-joint.component.html',
  styleUrls: ['./../rotator.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class AcJointComponent {
  @Input() model: RotatorFindingUiModel;

  afflicationType: typeof AfflicationTypeEnum;
  acJointClassificationType: typeof AcJointClassificationTypeEnum;
  tossyType: typeof TossyTypeEnum;
  rockwoodType: typeof RockwoodTypeEnum;

  constructor() {
    this.afflicationType = AfflicationTypeEnum;
    this.acJointClassificationType = AcJointClassificationTypeEnum;
    this.tossyType = TossyTypeEnum;
    this.rockwoodType = RockwoodTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.rotator.fileUpload;
  }
}
