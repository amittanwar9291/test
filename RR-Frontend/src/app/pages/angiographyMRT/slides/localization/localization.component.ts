import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { LocalizationUiModel } from '@models/angiographyMRT/ui/localization/localization-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { LocalizationValidationModel } from '@models/angiographyMRT/ui/localization/localization-validation.model';
import { UpperArteriesUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { UpperArteriesFindingTypeEnum } from '@enums/angiographyMRT/upper-arteries';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
  }

  updateUpperArteries() {
    if (!this.model.localization.arteriesOfTheRightUpperLimb) {
      this.registerConnectionCallback(5, UpperArteriesUiModel, (upperArteriesUiModel: UpperArteriesUiModel) => {
        upperArteriesUiModel.findings = upperArteriesUiModel.findings.filter(
          (finding: UpperArteriesFindingUiModel) => finding.findingType !== UpperArteriesFindingTypeEnum.BrachiocephalicTrunk
        );
      });
    }
  }
}
