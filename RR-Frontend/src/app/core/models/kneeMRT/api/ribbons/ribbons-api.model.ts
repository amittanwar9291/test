import { ReportModelBase } from '@models/report-model-base';
import { RibbonsFindingApiModel } from '@models/kneeMRT/api/ribbons/ribbons-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class RibbonsApiModel extends ReportModelBase {
  areFindings: string;
  findings: RibbonsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
