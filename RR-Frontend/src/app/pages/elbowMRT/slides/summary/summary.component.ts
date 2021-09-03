import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SummaryUiModel } from '@models/elbowMRT/ui/summary/summary-ui.model';
import { TimeTypeEnum } from '@enums/elbowMRT/summary/time-type.enum';
import { TCategoryTypeEnum } from '@enums/elbowMRT/summary/t-category-type.enum';
import { ComparisonToPriorExamsTypeEnum } from '@enums/elbowMRT/summary/comparison-to-prior-exams-type.enum';
import { BonesUiModel } from '@models/elbowMRT/ui/bones/bones-ui.model';
import { BonesFindingTypeEnum, DiagnosisTypeEnum } from '@enums/elbowMRT/bones/';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  comparisonToPriorExamsTypeEnum = ComparisonToPriorExamsTypeEnum;
  timeTypeEnum = TimeTypeEnum;
  tCategoryTypeEnum = TCategoryTypeEnum;

  thirdColumnEnable: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(4, BonesUiModel, (model: BonesUiModel) => {
      const diffDiagnosisRequiredOptions = [
        DiagnosisTypeEnum.EwingSarcoma,
        DiagnosisTypeEnum.Chondrosarcoma,
        DiagnosisTypeEnum.Osteosarcoma
      ];
      this.thirdColumnEnable = false;

      model.findings.forEach(finding => {
        if (finding.findingType === BonesFindingTypeEnum.Mass && !this.thirdColumnEnable) {
          this.thirdColumnEnable = [
            finding.differentialDiagnosis,
            finding.differentialDiagnosis1,
            finding.differentialDiagnosis2
          ].some(el => diffDiagnosisRequiredOptions.includes(el));
        }
      });
    });
  }
}
