import { ReportModelBase } from '@models/report-model-base';

import { PatellaFindingApiModel } from './patella-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class PatellaApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PatellaFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
