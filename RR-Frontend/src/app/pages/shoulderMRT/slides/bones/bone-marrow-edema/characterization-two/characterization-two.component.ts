import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

import { DifferentialDiagnosisTypeEnum } from '@enums/shoulderMRT/bones';

import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-characterization-two-bone-marrow-edema',
  templateUrl: './characterization-two.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationTwoComponent {
  @Input() model: BonesFindingUiModel;
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  constructor() {
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.bones.fileUpload;
  }

  clearReferencePicture(): void {
    this.referencePicture?.resetReferencePicture();
  }
}
