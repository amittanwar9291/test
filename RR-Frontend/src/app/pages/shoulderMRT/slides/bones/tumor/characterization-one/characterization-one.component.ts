import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { FirstLocalizationTypeEnum } from '@enums/shoulderMRT/bones';

import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-characterization-one-tumor',
  templateUrl: './characterization-one.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationOneComponent {
  @Input() model: BonesFindingUiModel;
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  firstLocalizationType: typeof FirstLocalizationTypeEnum;

  constructor() {
    this.firstLocalizationType = FirstLocalizationTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.bones.fileUpload;
  }

  clearReferencePicture(): void {
    this.referencePicture?.resetReferencePicture();
  }
}
