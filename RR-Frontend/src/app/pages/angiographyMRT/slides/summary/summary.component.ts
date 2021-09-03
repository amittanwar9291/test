import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { SummaryUiModel } from '@models/angiographyMRT/ui/summary/summary-ui.model';

import { ComparisonToPriorExamsTypeEnum, ModalityTypeEnum, TimeIntervalEnum } from '@enums/angiographyMRT/summary';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html'
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
