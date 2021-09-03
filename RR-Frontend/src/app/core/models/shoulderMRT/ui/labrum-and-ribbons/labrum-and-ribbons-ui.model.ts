import { ReportModelBase } from '@models/report-model-base';
import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LabrumAndRibbonsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LabrumAndRibbonsFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LabrumAndRibbonsFindingUiModel()];
  }
}
