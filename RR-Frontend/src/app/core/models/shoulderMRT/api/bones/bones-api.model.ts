import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { BonesFindingApiModel } from './bones-finding-api.model';

export class BonesApiModel extends ReportModelBase {
  findings: BonesFindingApiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();

    this.findings = [new BonesFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
