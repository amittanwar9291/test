import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { PostTraumaticHillSachsTypeEnum } from '@enums/shoulderMRT/bones';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-post-traumatic',
  templateUrl: './post-traumatic.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PostTraumaticComponent {
  @Input() model: BonesFindingUiModel;

  postTraumaticHillSachsType: typeof PostTraumaticHillSachsTypeEnum;

  constructor() {
    this.postTraumaticHillSachsType = PostTraumaticHillSachsTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.bones.fileUpload;
  }
}
