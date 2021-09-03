import { ReportModelBase } from '@models/report-model-base';
import { FindingsDynamicsType } from '@enums/shoulderMRT/summary';

export class SummaryUiModel extends ReportModelBase {
  isXray: boolean;
  isCT: boolean;
  isFollowup: boolean;
  followUpTimeType: string;
  isBiopsy: boolean;
  findingsDynamicsType: FindingsDynamicsType;

  constructor() {
    super();
    this.isXray = false;
    this.isCT = false;
    this.isFollowup = false;
    this.followUpTimeType = 'None';
    this.isBiopsy = false;
    this.findingsDynamicsType = FindingsDynamicsType.None;
  }
}
