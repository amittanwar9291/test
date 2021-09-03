import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FacialSkullUiModel } from '@models/headCT/ui/facial-skull/facial-skull-ui.model';

@Component({
  selector: 'rr-facial-skull',
  templateUrl: './facial-skull.component.html',
  styleUrls: ['./facial-skull.component.scss']
})
export class FacialSkullComponent extends SlideBaseComponent<FacialSkullUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, FacialSkullUiModel, commonServices);
  }
}
