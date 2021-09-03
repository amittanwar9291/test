import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DiagnosisUpdateValue } from '@models/shared/differential-diagnosis-dropdown/differential-diagnosis-update-value.model';
import { FindingBase } from '@models/shared/finding/finding.base';
import { ReportModelBase } from '@models/report-model-base';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { AppConfig } from '../../../../app.config';
import { mapKeys, compact, lowerFirst, isObject } from 'lodash';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { FileService } from '@services/shared/file-service/file.service';
import { HttpParams } from '@angular/common/http';
import { FindingWithDescriptionType } from '@models/shared/differential-diagnosis-dropdown/finding-with-description-type.model';

@Injectable({
  providedIn: 'root'
})
export class DifferentialDiagnosisDropdownService {
  diagnosis1IDescribe = new BehaviorSubject<DiagnosisUpdateValue>(null);
  diagnosis2IDescribe = new BehaviorSubject<DiagnosisUpdateValue>(null);
  diagnosis1IKnow = new BehaviorSubject<DiagnosisUpdateValue>(null);
  diagnosis2IKnow = new BehaviorSubject<DiagnosisUpdateValue>(null);

  descritionType = new BehaviorSubject<DescriptionTypeEnum>(null);

  constructor(private navigationReportDataService: NavigationReportDataService, private fileService: FileService) {}

  clear() {
    this.diagnosis1IDescribe.next(null);
    this.diagnosis2IDescribe.next(null);
    this.diagnosis1IKnow.next(null);
    this.diagnosis2IKnow.next(null);
  }

  removePicturesOnPreset(parentModel: FindingBase | ReportModelBase, presetModel: FindingBase | FindingBase[]) {
    const imagesToRemoveIds = [];
    mapKeys(parentModel, (value, key) => {
      if (isObject(value) && value.hasOwnProperty('uploadedImageFile') && presetModel[key]) {
        imagesToRemoveIds.push((parentModel[key] as ReferencePictureUiModel).imageFileId);
      }
    });

    const imagesToRemoveIdsCompacted = compact(imagesToRemoveIds);
    if (imagesToRemoveIdsCompacted.length > 0) {
      const currentPageNumber = this.navigationReportDataService.getCurrentPageNumber();
      const reportData = this.navigationReportDataService.getReportData();
      const moduleAndPageNames = reportData.pages.find(item => item.pageNumber === currentPageNumber).typeName.split('_');
      const module = lowerFirst(moduleAndPageNames[0]);
      const page = lowerFirst(moduleAndPageNames[1]);
      this.fileService.setRoute(`${AppConfig.settings.servicesUrls[module][page].fileUpload}`);
      return this.fileService.deleteMultiple(imagesToRemoveIdsCompacted);
    }
  }

  getPresetRequestHttpParams(parentModel: FindingBase | ReportModelBase, presetHttpParams?: HttpParams): HttpParams {
    if (presetHttpParams) {
      return presetHttpParams
        .set('reportId', this.navigationReportDataService.getReportId())
        .set('findingType', (parentModel as FindingWithDescriptionType).findingType);
    } else {
      return new HttpParams()
        .set('reportId', this.navigationReportDataService.getReportId())
        .set('findingType', (parentModel as FindingWithDescriptionType).findingType);
    }
  }
}
