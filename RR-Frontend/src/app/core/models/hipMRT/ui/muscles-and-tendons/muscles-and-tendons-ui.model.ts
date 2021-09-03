import { ReportModelBase } from '@models/report-model-base';

import { MusclesAndTendonsFindingUiModel } from './muscles-and-tendons-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MusclesAndTendonsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MusclesAndTendonsFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MusclesAndTendonsFindingUiModel()];
  }
}
