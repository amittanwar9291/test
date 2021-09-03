import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, Input } from '@angular/core';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';
import { PeritonealCavityUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { nameof } from 'ts-simple-nameof';
import { ExaminationRegionValidationModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui-validation.model';
import { GastrointestinalTractUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-ui.model';

@Component({
  selector: 'rr-examination-region',
  templateUrl: './examination-region.component.html',
  styleUrls: ['./examination-region.component.scss']
})
export class ExaminationRegionComponent extends SlideBaseComponent<ExaminationRegionUiModel> {
  @Input() model: ExaminationRegionUiModel;

  checkboxesValidation = [
    nameof<ExaminationRegionUiModel>(m => m.isMRIAbdomen),
    nameof<ExaminationRegionUiModel>(m => m.isMRIUpperAbdomen),
    nameof<ExaminationRegionUiModel>(m => m.isMRILiver),
    nameof<ExaminationRegionUiModel>(m => m.isMRIPancreas),
    nameof<ExaminationRegionUiModel>(m => m.isMRCP),
    nameof<ExaminationRegionUiModel>(m => m.isMRISellink),
    nameof<ExaminationRegionUiModel>(m => m.isMRIKidneys),
    nameof<ExaminationRegionUiModel>(m => m.isMRIAdrenalGlands),
    nameof<ExaminationRegionUiModel>(m => m.isMRIRetroperitoneum)
  ].join(' ');

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      ExaminationRegionUiModel,
      commonServices,
      ExaminationRegionValidationModel
    );

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => {
        return this.model.patientInformation.gender !== GenderTypeEnum.Female;
      },
      (model: SummaryUiModel) => {
        if (this.model.patientInformation.gender !== GenderTypeEnum.Female) {
          model.isTransvaginal = false;
          model.isGynecology = false;
        }
      }
    );

    this.addPageConnection(
      10,
      PeritonealCavityUiModel,
      () => {
        return true;
      },
      (model: PeritonealCavityUiModel) => {
        if (this.model.patientInformation.gender !== GenderTypeEnum.Female) {
          model.findings.map(finding => {
            finding.isVesicoUterinePouch = false;
            finding.isRectoUterinePouchPouchOfDouglas = false;
          });
        }
        if (this.model.patientInformation.gender !== GenderTypeEnum.Male) {
          model.findings.map(finding => {
            finding.isRectoVesicalPouch = false;
          });
        }
      }
    );
    this.addPageConnection(
      9,
      GastrointestinalTractUiModel,
      () => {
        return true;
      },
      (model: GastrointestinalTractUiModel) => {
        if (this.model.patientInformation.gender !== GenderTypeEnum.Female) {
          model.findings.map(finding => {
            finding.isEnteroVaginal = false;
          });
        }
      }
    );
  }
}
