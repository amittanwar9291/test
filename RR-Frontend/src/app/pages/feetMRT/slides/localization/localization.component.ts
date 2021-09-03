import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { LocalizationUiModel } from '@models/feetMRT/ui/localization/localization-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { BonesUiModel } from '@models/feetMRT/ui/bones/bones-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';
import { LocalizationValidationModel } from '@models/feetMRT/ui/localization/localization-validation.model';

@Component({
  selector: 'rr-feet-mrt-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private enumMapper: EnumMapper
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
    this.registerConnection();
  }

  private registerConnection() {
    this.addPageConnection(
      4,
      BonesUiModel,
      () => {
        return true;
      },
      (model: BonesUiModel) => {
        if (this.enumMapper.mapToString(this.model.localization) === 'None') {
          model.findings.forEach(finding => {
            finding.threeDimensionalLocalization = new FootBigModel();
          });
        }
      }
    );
  }
}
