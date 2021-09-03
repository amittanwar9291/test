import { ReportModelBase } from '@models/report-model-base';

import { PatellaFindingUiModel } from './patella-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class PatellaUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PatellaFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PatellaFindingUiModel()];
  }
}
