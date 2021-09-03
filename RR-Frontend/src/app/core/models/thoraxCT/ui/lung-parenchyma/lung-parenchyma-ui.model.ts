import { ReportModelBase } from '@models/report-model-base';

import { LungParenchymaFindingUiModel } from './lung-parenchyma-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LungParenchymaUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LungParenchymaFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LungParenchymaFindingUiModel()];
  }
}
