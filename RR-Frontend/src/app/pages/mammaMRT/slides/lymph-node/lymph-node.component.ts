import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { LymphNodeUiModel } from '@models/mammaMRT/ui/lymph-node/lymph-node-ui.model';
import { LymphNodeValidation } from '@models/mammaMRT/ui/lymph-node/lymph-node-validation.model';

import {
  AxillaryLymphNodesTypeEnum,
  BreastDetailTypeEnum,
  DifferentialDiagnosisTypeEnum,
  FocalLiverLesionTypeEnum,
  LiverLesionBenigneTypeEnum,
  LungDiseaseTypeEnum,
  OtherLymphNodesTypeEnum
} from '@enums/mammaMRT/lymph-node';

@Component({
  selector: 'rr-lymph-node',
  templateUrl: './lymph-node.component.html',
  styleUrls: ['./lymph-node.component.scss']
})
export class LymphNodeComponent extends SlideBaseComponent<LymphNodeUiModel> {
  axillaryLymphNodesType: typeof AxillaryLymphNodesTypeEnum;
  otherLymphNodesType: typeof OtherLymphNodesTypeEnum;
  focalLiverLesionType: typeof FocalLiverLesionTypeEnum;
  liverLesionBenigneType: typeof LiverLesionBenigneTypeEnum;
  lungDiseaseType: typeof LungDiseaseTypeEnum;
  breastDetailType: typeof BreastDetailTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  readonly blocksToClear = 'isLocalizationBlock numberInputsBlock localizationBlock infiltrationAndDifferentialDiagnosisBlock';

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LymphNodeUiModel, commonServices, LymphNodeValidation);

    this.axillaryLymphNodesType = AxillaryLymphNodesTypeEnum;
    this.otherLymphNodesType = OtherLymphNodesTypeEnum;
    this.focalLiverLesionType = FocalLiverLesionTypeEnum;
    this.liverLesionBenigneType = LiverLesionBenigneTypeEnum;
    this.lungDiseaseType = LungDiseaseTypeEnum;
    this.breastDetailType = BreastDetailTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }
}
