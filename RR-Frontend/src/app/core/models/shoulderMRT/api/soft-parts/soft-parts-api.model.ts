import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { SoftPartsFindingApiModel } from './soft-parts-finding-api.model';

export class SoftPartsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftPartsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftPartsFindingApiModel()];
  }
}
