import { Component, OnInit } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { SummaryUiModel } from '@models/feetMRT/ui/summary/summary-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { TimeTypeEnum } from '@enums/feetMRT/summary/time-type.enum';
import { SummaryValidationModel } from '@models/feetMRT/ui/summary/summary-validation.model';
import { TClassificationTypeEnum } from '@enums/feetMRT/summary/t-classification-type.enum';
import { EvaluationTypeEnum } from '@enums/feetMRT/summary/evaluation-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesUiModel } from '@models/feetMRT/ui/bones/bones-ui.model';
import { BonesFindingTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/feetMRT/bones';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> implements OnInit {
  bonesUiModel: BonesUiModel;
  timeTypeEnum: typeof TimeTypeEnum;
  tClassificationType: typeof TClassificationTypeEnum;
  evaluationType: typeof EvaluationTypeEnum;

  isStagingEnabled: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);
    this.initializeEnums();
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(4, BonesUiModel, (bonesUiModel: BonesUiModel) => {
      this.bonesUiModel = bonesUiModel;
      this.isStagingEnabled = this.stagingEnabled(bonesUiModel);
    });
  }

  private initializeEnums(): void {
    this.timeTypeEnum = TimeTypeEnum;
    this.tClassificationType = TClassificationTypeEnum;
    this.evaluationType = EvaluationTypeEnum;
  }

  stagingEnabled(bonesUiModel: BonesUiModel): boolean {
    const referenceFindings: BonesFindingUiModel[] = bonesUiModel.findings.filter(
      item => item.findingType === BonesFindingTypeEnum.MassOsteolysis
    );
    const requiredDiagnosis: DifferentialDiagnosisTypeEnum[] = [
      DifferentialDiagnosisTypeEnum.EwingSarcoma,
      DifferentialDiagnosisTypeEnum.Osteosarcoma,
      DifferentialDiagnosisTypeEnum.Chondrosarcoma
    ];

    return !!referenceFindings.find(
      item =>
        requiredDiagnosis.includes(item.differentialDiagnosis1) ||
        requiredDiagnosis.includes(item.differentialDiagnosis2) ||
        requiredDiagnosis.includes(item.differentialDiagnosis3) ||
        requiredDiagnosis.includes(item.spaceRequirementDifferentialDiagnosis)
    );
  }
}
