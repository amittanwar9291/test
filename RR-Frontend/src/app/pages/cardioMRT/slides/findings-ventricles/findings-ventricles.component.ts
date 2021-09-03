import { Component, ViewChild } from '@angular/core';

import { FindingsVentriclesUiModel } from '@models/cardioMRT/ui/findings-ventricles/findings-ventricles-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

@Component({
  selector: 'rr-findings-ventricles',
  templateUrl: './findings-ventricles.component.html',
  styleUrls: ['./findings-ventricles.component.scss']
})
export class FindingsVentriclesComponent extends SlideBaseComponent<FindingsVentriclesUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, FindingsVentriclesUiModel, commonServices);
  }
}
