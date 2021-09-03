import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { SummaryUiModel } from '@models/spineCT';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SummaryValidationModel } from '@models/spineCT/ui/summary/summary-validation.model';
import { PainTherapyInterventionalTypeEnum } from '@enums/spineCT/summary/pain-therapy-interventional-type.enum';
import { FindingsDynamicsTypeEnum } from '@enums/spineCT/summary/findings-dynamics-type.enum';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  painTherapyInterventionalTypeEnum = PainTherapyInterventionalTypeEnum;
  findingsDynamicsTypeEnum = FindingsDynamicsTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);
  }

  isAnySiblingCheckboxSelected(): boolean {
    return this.model.isMRTCervicalSpine || this.model.isMRTThoracicSpine || this.model.isMRTLumbarSpine || this.model.isMRTSacroiliacJoint;
  }

  checkAndClearWithIVContrastAgent() {
    if (!this.isAnySiblingCheckboxSelected()) {
      this.model.isWithIVContrastAgent = false;
    }
  }
}
