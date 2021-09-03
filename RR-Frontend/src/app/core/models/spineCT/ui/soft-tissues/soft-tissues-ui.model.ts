import { ReportModelBase } from '@models/report-model-base';

import { SoftTissuesFindingUiModel } from '@models/spineCT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SoftTissuesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftTissuesFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftTissuesFindingUiModel()];
  }
}
