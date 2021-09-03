import { Component } from '@angular/core';

import { StudyAreaUiModel } from '@models/thoraxCT/ui/study-area/study-area-ui.model';

import { NavigationService } from '@services/shared';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

@Component({
  selector: 'rr-study-area',
  templateUrl: './study-area.component.html',
  styleUrls: ['./study-area.component.scss']
})
export class StudyAreaComponent extends SlideBaseComponent<StudyAreaUiModel> {
  isDedicatedChestCT = true;

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
