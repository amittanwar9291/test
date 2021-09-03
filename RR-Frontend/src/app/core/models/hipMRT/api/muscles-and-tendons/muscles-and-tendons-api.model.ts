import { ReportModelBase } from '@models/report-model-base';

import { MusclesAndTendonsFindingApiModel } from './muscles-and-tendons-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MusclesAndTendonsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MusclesAndTendonsFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
