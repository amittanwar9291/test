import { ReportModelBase } from '@models/report-model-base';
import { FindingsDynamicsTypeEnum } from '@enums/hipMRT/summary/findings-dynamics-type.enum';
import { FollowupTimeEnum } from '@enums/kneeMRT/summary/followup-time.enum';

export class SummaryUiModel extends ReportModelBase {
  isXRay: boolean;
  isCT: boolean;
  isFollowUp: boolean;
  followUpTimeType: FollowupTimeEnum;
  isBiopsy: boolean;
  findingsDynamicsType: FindingsDynamicsTypeEnum;

  constructor() {
    super();
    this.isXRay = false;
    this.isCT = false;
    this.isFollowUp = false;
    this.followUpTimeType = FollowupTimeEnum.None;
    this.isBiopsy = false;
    this.findingsDynamicsType = FindingsDynamicsTypeEnum.None;
  }
}
