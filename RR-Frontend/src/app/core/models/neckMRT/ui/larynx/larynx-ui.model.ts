import { ReportModelBase } from '@models/report-model-base';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LarynxUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LarynxFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LarynxFindingUiModel()];
  }
}
