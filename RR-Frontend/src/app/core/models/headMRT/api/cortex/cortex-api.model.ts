import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CortexFindingApiModel } from '@models/headMRT/api/cortex/cortex-finding-api.model';

export class CortexApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CortexFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CortexFindingApiModel()];
  }
}
