import { ReportModelBase } from '@models/report-model-base';

import { SoftTissuesFindingApiModel } from '@models/spineCT/api/soft-tissues/soft-tissues-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SoftTissuesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftTissuesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftTissuesFindingApiModel()];
  }
}
