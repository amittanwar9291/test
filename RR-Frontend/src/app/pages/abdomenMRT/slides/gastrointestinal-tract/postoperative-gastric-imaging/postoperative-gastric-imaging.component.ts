import { Component, Input, ViewChild } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ComplicationCourseOfDiseaseTypeEnum,
  StomachResectionTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/postoperative-gastric-imaging';
import { AppConfig } from '../../../../../app.config';
import { GastricLocalizationTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-postoperative-gastric-imaging',
  templateUrl: './postoperative-gastric-imaging.component.html',
  styleUrls: ['./postoperative-gastric-imaging.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PostoperativeGastricImagingComponent {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isCMReinforced: boolean;

  gastricLocalizationType = GastricLocalizationTypeEnum;
  complicationCourseOfDiseaseType = ComplicationCourseOfDiseaseTypeEnum;
  stomachResectionType = StomachResectionTypeEnum;

  resetInput() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
  resetAllInputs() {
    this.model.sizeInMm = null;
    this.model.secondPlaneInMm = null;
    this.model.thirdPlaneInMm = null;
  }

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
