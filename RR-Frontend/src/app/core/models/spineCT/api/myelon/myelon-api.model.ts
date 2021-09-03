import { ReportModelBase } from '@models/report-model-base';

import { MyelonFindingApiModel } from '@models/spineCT/api/myelon/myelon-finding-api.model';
import { MyelonSpinalCanalAreFindings } from '@enums/spineCT/myelon/myelon-spinal-canal-are-findings';

export class MyelonApiModel extends ReportModelBase {
  areFindings: MyelonSpinalCanalAreFindings;
  findings: MyelonFindingApiModel[];
  constructor() {
    super();
    this.areFindings = MyelonSpinalCanalAreFindings.None;
    this.findings = [];
  }
}
