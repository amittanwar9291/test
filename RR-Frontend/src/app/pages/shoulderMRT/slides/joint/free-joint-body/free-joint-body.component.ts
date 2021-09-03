import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';

import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-free-joint-body',
  templateUrl: './free-joint-body.component.html',
  styleUrls: ['./free-joint-body.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FreeJointBodyComponent {
  @Input() model: JointFindingUiModel;

  constructor() {}

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.jointAndBursae.fileUpload;
  }
}
