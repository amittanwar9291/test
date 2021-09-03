import { ReportModelBase } from '@models/report-model-base';
import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class RibbonsUiModel extends ReportModelBase {
  areFindings: string;
  findings: RibbonsFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new RibbonsFindingUiModel()];
  }
}
