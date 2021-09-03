import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { SummaryUiModel } from '@models/angiographyCT/ui/summary/summary-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { ComparisonToPriorExamsTypeEnum, ModalityTypeEnum, TimeIntervalEnum } from '@enums/angiographyCT/summary';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  comparisonToPriorExamsType = ComparisonToPriorExamsTypeEnum;
  modalityType = ModalityTypeEnum;
  timeIntervalType = TimeIntervalEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);
  }
}
