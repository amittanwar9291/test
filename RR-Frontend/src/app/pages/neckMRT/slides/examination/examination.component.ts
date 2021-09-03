import { Component, OnInit } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { ExaminationUiModel } from '@models/neckMRT/ui/examination/examination-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

@Component({
  selector: 'rr-examination',
  templateUrl: './examination.component.html'
})
export class ExaminationComponent extends SlideBaseComponent<ExaminationUiModel> implements OnInit {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, ExaminationUiModel, commonServices);
    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.model.isMRINeck = true;
  }
}
