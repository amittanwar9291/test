import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { FindingsVentriclesUiModel } from '@models/cardioMRT/ui/findings-ventricles/findings-ventricles-ui.model';
import { AppConfig } from 'app/app.config';
import { UploaderComponent } from '@controls/uploader/uploader.component';
import { UploaderNgWrapperComponent } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.component';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';

@Component({
  selector: 'rr-measured-values-lv',
  templateUrl: './measured-values-lv.component.html',
  styleUrls: ['../findings-ventricles.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MeasuredValuesLvComponent {
  @Input() model: FindingsVentriclesUiModel;
  @ViewChild(UploaderNgWrapperComponent) fileUploader: UploaderNgWrapperComponent;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.cardioMRT.findingsVentricles.fileUpload;
  }

  changeLeftHeartFailureType(): void {
    this.model.hFpEF = false;
    this.model.hFmrEF = false;
    this.model.hFrEF = false;

    if (!this.model.isLeftHeartFailure) {
      return;
    }

    const lvEFInPercent = this.model.lvefInPercent;

    if (lvEFInPercent >= 50) {
      this.model.hFpEF = true;
    } else if (lvEFInPercent >= 40 && lvEFInPercent < 50) {
      this.model.hFmrEF = true;
    } else if (lvEFInPercent < 40 && lvEFInPercent > 0) {
      this.model.hFrEF = true;
    }
  }

  clearImage(): void {
    this.model.myocardialStrainImageId = null;
    this.model.myocardialStrainImage = null;
  }

  get isUploaderDisabled(): boolean {
    return this.model.referencePicture.uploadedImageFile === null;
  }

  assignImageId(imageModel: FileUiModel): void {
    this.model.myocardialStrainImageId = imageModel.id;
  }

  deleteMyocardialStrainImage(): void {
    this.fileUploader.clear();
    this.clearImage();
  }
}
