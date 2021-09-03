import { Component } from '@angular/core';

import { SummaryUiModel } from '@models/shoulderMRT/ui/summary/summary-ui.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FollowUpTimeType, FindingsDynamicsType } from '@enums/shoulderMRT/summary';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  readonly followUpTimeType: typeof FollowUpTimeType;
  readonly findingsDynamicsType: typeof FindingsDynamicsType;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);

    this.followUpTimeType = FollowUpTimeType;
    this.findingsDynamicsType = FindingsDynamicsType;
  }
}
