import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { SummaryUiModel } from '@models/hipMRT/ui/summary/summary-ui.model';
import { BonesUiModel } from '@models/hipMRT/ui/bones/bones-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DateMonthTypeEnum, FindingsDynamicsTypeEnum, TClassificationTypeEnum } from '@enums/hipMRT/summary';
import { BonesFindingTypeEnum } from '@enums/hipMRT/bones/';
import { MassOsteolysisDifferentialDiagnosisTypeEnum } from '@enums/hipMRT/bones/';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  dateMonthType = DateMonthTypeEnum;
  findingsDynamicsType = FindingsDynamicsTypeEnum;
  tClassificationType = TClassificationTypeEnum;

  isAnyRequiredDDOptionSelected = false;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);

    this.registerConnections();
  }

  private registerConnections(): void {
    this.registerConnectionCallback(4, BonesUiModel, (model: BonesUiModel) => {
      const diffDiagnosisRequiredOptions = [
        MassOsteolysisDifferentialDiagnosisTypeEnum.EwingSarcoma,
        MassOsteolysisDifferentialDiagnosisTypeEnum.Chondrosarcoma,
        MassOsteolysisDifferentialDiagnosisTypeEnum.Osteosarcoma
      ];

      model.findings.forEach(finding => {
        if (finding.findingType === BonesFindingTypeEnum.MassOrOsteolysis) {
          this.isAnyRequiredDDOptionSelected = [
            finding.mainDiagnosisType,
            finding.differentialDiagnosis1,
            finding.differentialDiagnosis2,
            finding.differentialDiagnosis3
          ].some(el => diffDiagnosisRequiredOptions.includes(el));
        }
      });
    });
  }
}
