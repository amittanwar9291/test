import { FollowUpTypeEnum } from '@enums/handMRT/evaulation/follow-up-type.enum';
import { TClassificationTypeEnum } from '@enums/handMRT/evaulation/t-classification-type.enum';
import { FindingsDynamicsTypeEnum } from '@enums/handMRT/evaulation/findings-dynamics-type.enum';

import { ReportModelBase } from '@models/report-model-base';

export class EvaluationApiModel extends ReportModelBase {
  findingsDynamicsType: FindingsDynamicsTypeEnum;
  isXray: boolean;
  isXrayScaphoidQuartet: boolean;
  isCT: boolean;
  isCTArthrography: boolean;
  isMRArthrography: boolean;
  isFollowUp: boolean;
  followUpType: FollowUpTypeEnum;
  isLocalRecurrence: boolean;
  isMRIContrast: boolean;
  isBiopsy: boolean;
  tClassificationType: TClassificationTypeEnum;

  constructor() {
    super();

    this.findingsDynamicsType = FindingsDynamicsTypeEnum.None;
    this.isXray = false;
    this.isXrayScaphoidQuartet = false;
    this.isCT = false;
    this.isCTArthrography = false;
    this.isMRArthrography = false;
    this.isFollowUp = false;
    this.followUpType = FollowUpTypeEnum.None;
    this.isLocalRecurrence = false;
    this.isMRIContrast = false;
    this.isBiopsy = false;
    this.tClassificationType = TClassificationTypeEnum.None;
  }
}
