import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { LocalizationUiModel } from '@models/elbowMRT/ui/localization/localization-ui.model';
import { LocalizationValidationModel } from '@models/elbowMRT/ui/localization/localization-validation.model';

@Component({
  selector: 'rr-elbow-mrt-localization',
  templateUrl: './localization.component.html'
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
  }
}
