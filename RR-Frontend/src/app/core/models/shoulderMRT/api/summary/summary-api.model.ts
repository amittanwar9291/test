import { ReportModelBase } from '@models/report-model-base';

export class SummaryApiModel extends ReportModelBase {
  isXray: boolean;
  isCT: boolean;
  isFollowup: boolean;
  followUpTimeType: string;
  isBiopsy: boolean;
  findingsDynamicsType: string;

  constructor() {
    super();
    this.isXray = false;
    this.isCT = false;
    this.isFollowup = false;
    this.followUpTimeType = 'None';
    this.isBiopsy = false;
    this.findingsDynamicsType = 'None';
  }
}
