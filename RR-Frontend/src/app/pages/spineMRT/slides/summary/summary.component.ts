import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConsultationTypeEnum } from '@enums/spineMRT/summary/consultation-type.enum';
import { InterventionTypeEnum } from '@enums/spineMRT/summary/intervention-type.enum';

import { SummaryUiModel } from '@models/spineMRT/ui/summary/summary-ui.model';
import { SummaryValidationModel } from '@models/spineMRT/ui/summary/summary-validation.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

@Component({
  selector: 'rr-spine-mrt-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  consultationTypeEnum: typeof ConsultationTypeEnum;
  interventionTypeEnum: typeof InterventionTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);

    this.consultationTypeEnum = ConsultationTypeEnum;
    this.interventionTypeEnum = InterventionTypeEnum;
  }
}
