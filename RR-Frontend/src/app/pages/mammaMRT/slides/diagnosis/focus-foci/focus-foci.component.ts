import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-focus-foci',
  templateUrl: './focus-foci.component.html',
  styleUrls: ['./focus-foci.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocusFociComponent {
  @Input() model: DiagnosisFindingUiModel;

  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.mammaMRT.diagnosis.fileUpload;
  }

  constructor() {}

  removeUploadedFile(): void {
    this.referencePictureComponent.resetReferencePicture();
  }
}
