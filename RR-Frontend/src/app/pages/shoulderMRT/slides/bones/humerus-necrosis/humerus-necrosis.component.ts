import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-humerus-necrosis',
  templateUrl: './humerus-necrosis.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class HumerusNecrosisComponent {
  @Input() model: BonesFindingUiModel;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.bones.fileUpload;
  }
}
