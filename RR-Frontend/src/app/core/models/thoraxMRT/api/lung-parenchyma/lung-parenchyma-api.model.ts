import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LungParenchymaFindingApiModel } from './lung-parenchyma-finding-api.model';

export class LungParenchymaApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LungParenchymaFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
