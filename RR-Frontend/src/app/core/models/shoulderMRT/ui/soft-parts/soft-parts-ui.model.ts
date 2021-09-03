import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { SoftPartsFindingUiModel } from './soft-parts-finding-ui.model';

export class SoftPartsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftPartsFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftPartsFindingUiModel()];
  }
}
