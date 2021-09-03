import { Component, OnInit } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { EvaluationUiModel } from '@models/handMRT/ui/evaluation/evaluation-ui.model';

import { NavigationService } from '@services/shared';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FollowUpTypeEnum } from '@enums/handMRT/evaulation/follow-up-type.enum';
import { FindingsDynamicsTypeEnum } from '@enums/handMRT/evaulation/findings-dynamics-type.enum';
import { TClassificationTypeEnum } from '@enums/handMRT/evaulation/t-classification-type.enum';
import { BonesUiModel } from '@models/handMRT/ui/bones/bones-ui.model';

@Component({
  selector: 'rr-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent extends SlideBaseComponent<EvaluationUiModel> {
  thirdColumnEnable: boolean;

  tClassificationType: typeof TClassificationTypeEnum;
  followUpType: typeof FollowUpTypeEnum;
  findingsDynamicsType: typeof FindingsDynamicsTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, EvaluationUiModel, commonServices);
    this.registerConnection();

    this.tClassificationType = TClassificationTypeEnum;
    this.followUpType = FollowUpTypeEnum;
    this.findingsDynamicsType = FindingsDynamicsTypeEnum;
  }

  private registerConnection() {
    // todo finish when page 4 redesign ready
    // third column should be enable Only if on Page 04,finding "Raumforderung/Osteolyse",
    // Differentialdiagnose = "Ewing Sarkom", "Osteosarkom" or "Chondrosarkom"
    this.registerConnectionCallback(4, BonesUiModel, (bonesUiModel: BonesUiModel) => {
      this.thirdColumnEnable = true;
    });
  }
}
