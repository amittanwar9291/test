import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { BrainstemCranialNervesUiModel } from '@models/headCT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';

@Component({
  selector: 'rr-brainstem-cranial-nerves',
  templateUrl: './brainstem-cranial-nerves.component.html',
  styleUrls: ['./brainstem-cranial-nerves.component.scss']
})
export class BrainstemCranialNervesComponent extends SlideBaseComponent<BrainstemCranialNervesUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, BrainstemCranialNervesUiModel, commonServices);
  }
}
