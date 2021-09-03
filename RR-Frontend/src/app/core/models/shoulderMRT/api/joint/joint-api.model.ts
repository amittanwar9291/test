import { ReportModelBase } from '@models/report-model-base';

import { JointFindingApiModel } from './joint-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class JointApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: JointFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
