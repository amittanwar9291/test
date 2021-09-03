import { ReportModelBase } from '@models/report-model-base';
import { SoftTissueFindingApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SoftTissueApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftTissueFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
