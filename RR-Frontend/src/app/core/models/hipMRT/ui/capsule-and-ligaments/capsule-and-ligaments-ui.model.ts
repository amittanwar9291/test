import { ReportModelBase } from '@models/report-model-base';
import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class CapsuleAndLigamentsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CapsuleAndLigamentsFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CapsuleAndLigamentsFindingUiModel()];
  }
}
