import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { CourseTypeEnum } from '@enums/abdomenMRT/summary';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';
import { LiverFindingTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverUiModel } from '@models/abdomenMRT/ui/liver/liver-ui.model';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);
    this.registerConnections();
  }

  courseTypeEnum = CourseTypeEnum;
  gender: GenderTypeEnum;
  isFocalLiver = false;
  genderTypeEnum = GenderTypeEnum;

  registerConnections() {
    this.registerConnectionCallback(1, ExaminationRegionUiModel, (examinationRegionUiModel: ExaminationRegionUiModel) => {
      this.gender = examinationRegionUiModel?.patientInformation?.gender;
    });
    this.registerConnectionCallback(4, LiverUiModel, (liverModel: LiverUiModel) => {
      if (liverModel.findings.some(item => item.findingType === LiverFindingTypeEnum.FocalLiverLesion)) {
        this.isFocalLiver = true;
      } else {
        this.isFocalLiver = false;
      }
    });
  }
}
