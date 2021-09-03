import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { SummaryUiModel } from '@models/kneeMRT/ui/summary/summary-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingsDynamicsTypeEnum } from '@enums/hipMRT/summary/findings-dynamics-type.enum';
import { FollowupTimeEnum } from '@enums/kneeMRT/summary/followup-time.enum';

@Component({
  selector: 'rr-knee-mrt-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  findingsDynamicsType: typeof FindingsDynamicsTypeEnum;
  followupTimeEnum: typeof FollowupTimeEnum;
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);

    this.findingsDynamicsType = FindingsDynamicsTypeEnum;
    this.followupTimeEnum = FollowupTimeEnum;
  }
}
