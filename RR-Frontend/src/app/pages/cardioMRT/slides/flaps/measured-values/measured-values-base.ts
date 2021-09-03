import { Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AppConfig } from 'app/app.config';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { MeasurementUiModel } from '@models/cardioMRT/ui/flaps/measurement-ui.model';

import { MeasurementFileTypeEnum } from '@enums/shared/uploader/measurement-file-type.enum';
import { UploaderNgWrapperComponent } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.component';
import { FileService } from '@services/shared/file-service/file.service';

export class MeasuredValuesBase implements OnInit, OnDestroy {
  @Input() model: MeasurementUiModel;

  subscription: Subscription;

  @ViewChild('flowCurveImageUploader') flowCurveImageUploader: UploaderNgWrapperComponent;
  @ViewChild('pcMeasurementImageUploader') pcMeasurementImageUploader: UploaderNgWrapperComponent;

  refPicturePlaceholder: string;
  measurementFileType: typeof MeasurementFileTypeEnum;

  constructor(private translateService: TranslateService, private fileService: FileService) {
    this.measurementFileType = MeasurementFileTypeEnum;
  }

  ngOnInit(): void {
    this.subscription = this.translateService.stream('cardioMRT.flaps.referencePicturePlaceholder.value').subscribe((out: string): void => {
      this.refPicturePlaceholder = out;
    });
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.cardioMRT.flaps.fileUpload;
  }

  async resetMeasurePicture(): Promise<void> {
    const uploadedFileIds = this.fileService.getUploadedFileIds([this.model.flowCurveImage, this.model.pcMeasurementImage]);

    if (uploadedFileIds.length) {
      this.fileService.deleteMultiple(uploadedFileIds, AppConfig.settings.servicesUrls.cardioMRT.flaps.fileUpload).then(() => {
        this.flowCurveImageUploader.clearFileModel();
        this.clearFlowCurveImage();

        this.pcMeasurementImageUploader.clearFileModel();
        this.clearPcMeasurementImage();
      });
    }
  }

  clearFlowCurveImage(): void {
    this.model.flowCurveImage = null;
    this.model.flowCurveImageId = '';
  }

  clearPcMeasurementImage(): void {
    this.model.pcMeasurementImage = null;
    this.model.pcMeasurementImageId = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
