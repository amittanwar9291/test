import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { StudyAreaUiModel } from '@models/thoraxMRT/ui/study-area/study-area-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

@Component({
  selector: 'rr-study-area',
  templateUrl: './study-area.component.html',
  styleUrls: ['./study-area.component.scss']
})
export class StudyAreaComponent extends SlideBaseComponent<StudyAreaUiModel> {
  isThoraxDedicated = true;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, StudyAreaUiModel, commonServices);
    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
  }
}
