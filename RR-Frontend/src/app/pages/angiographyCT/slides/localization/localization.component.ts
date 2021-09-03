import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, OnInit } from '@angular/core';
import { LocalizationUiModel } from '@models/angiographyCT/ui/localization/localization-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { LocalizationValidationModel } from '@models/angiographyCT/ui/localization/localizationCT-validation.model';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';
import { UpperArteriesUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesFindingUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { UpperArteriesFindingTypeEnum } from '@enums/angiographyCT/upper-arteries';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> implements OnInit {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });

    this.preparePageConnection();
  }

  protected preparePageConnection(): void {
    this.addPageConnection(
      3,
      TechnologyUiModel,
      () => !this.model.localization.coronaryArteries,
      (model: TechnologyUiModel) => {
        model.isBetaBlocker = false;
        model.isNitroglycerin = false;
      }
    );
  }

  updateUpperArteries() {
    if (!this.model.localization.arteriesOfTheRightUpperLimb) {
      this.registerConnectionCallback(6, UpperArteriesUiModel, (upperArteriesUiModel: UpperArteriesUiModel) => {
        upperArteriesUiModel.findings = upperArteriesUiModel.findings.filter(
          (finding: UpperArteriesFindingUiModel) => finding.findingType !== UpperArteriesFindingTypeEnum.BrachiocephalicTrunk
        );
      });
    }
  }
}
