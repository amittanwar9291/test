import { ReportModelBase } from '@models/report-model-base';
import { LymphNodesFindingApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-nodes-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LymphNodesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LymphNodesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
