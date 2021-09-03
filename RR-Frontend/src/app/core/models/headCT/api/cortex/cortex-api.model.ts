import { ReportModelBase } from '@models/report-model-base';
import { CortexFindingApiModel } from '@models/headCT/api/cortex/cortex-finding-api.model';
import { CortexAreFindingsEnum } from '@enums/shared/head/cortex';

export class CortexApiModel extends ReportModelBase {
  areFindings: CortexAreFindingsEnum;
  findings: CortexFindingApiModel[];
  constructor() {
    super();
    this.areFindings = CortexAreFindingsEnum.None;
    this.findings = [new CortexFindingApiModel()];
  }
}
