import { ReportModelBase } from '@models/report-model-base';
import { CapsuleAndLigamentsFindingApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class CapsuleAndLigamentsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CapsuleAndLigamentsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
