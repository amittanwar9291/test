import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';

import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

export class SoftTissuesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftTissuesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftTissuesFindingUiModel()];
  }
}
