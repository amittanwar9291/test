import { Component, Input, ViewChild } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AppConfig } from '../../../../../app.config';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { HeightTypeEnum, SideTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';

@Component({
  selector: 'rr-appendagitis',
  templateUrl: './appendagitis.component.html',
  styleUrls: ['./appendagitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppendagitisComponent {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  heightType = HeightTypeEnum;
  sideType = SideTypeEnum;

  resetInput() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
