import { ReportModelBase } from '@models/report-model-base';
import { LabrumAndRibbonsFindingApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-findings-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LabrumAndRibbonsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LabrumAndRibbonsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LabrumAndRibbonsFindingApiModel()];
  }
}
