import { ReportModelBase } from '@models/report-model-base';

import { LungParenchymaFindingApiModel } from './lung-parenchyma-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LungParenchymaApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LungParenchymaFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
