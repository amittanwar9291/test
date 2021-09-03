import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LymphNodesFindingApiModel } from '@models/pelvisMRT/api/lymph-nodes/lymph-nodes-finding-api.model';

export class LymphNodesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LymphNodesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LymphNodesFindingApiModel()];
  }
}
