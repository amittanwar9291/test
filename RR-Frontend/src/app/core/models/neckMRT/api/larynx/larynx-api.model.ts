import { ReportModelBase } from '@models/report-model-base';
import { LarynxFindingApiModel } from '@models/neckMRT/api/larynx/larynx-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LarynxApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LarynxFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
