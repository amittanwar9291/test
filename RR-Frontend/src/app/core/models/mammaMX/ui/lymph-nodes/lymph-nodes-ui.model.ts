import { ReportModelBase } from '@models/report-model-base';
import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LymphNodesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LymphNodesFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LymphNodesFindingUiModel()];
  }
}
