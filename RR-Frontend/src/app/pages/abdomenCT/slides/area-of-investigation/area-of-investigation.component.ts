import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AreaOfInvestigationUiModel } from '@models/abdomenCT/ui/area-of-investigation/area-of-investigation-ui.model';

@Component({
  selector: 'rr-area-of-investigation',
  templateUrl: './area-of-investigation.component.html',
  styleUrls: ['./area-of-investigation.component.scss']
})
export class AreaOfInvestigationComponent extends SlideBaseComponent<AreaOfInvestigationUiModel> {
  isMRIAbdomen = true;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AreaOfInvestigationUiModel, commonServices);

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
  }
}
