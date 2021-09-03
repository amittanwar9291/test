import { ReportModelBase } from '@models/report-model-base';

import { JointFindingUiModel } from './joint-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class JointUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: JointFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new JointFindingUiModel()];
  }
}
