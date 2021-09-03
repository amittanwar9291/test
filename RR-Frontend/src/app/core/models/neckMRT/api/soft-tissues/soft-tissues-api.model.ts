import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SoftTissuesFindingApiModel } from '@models/neckMRT/api/soft-tissues/soft-tissues-finding-api.model';

export class SoftTissuesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftTissuesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
