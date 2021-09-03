import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { BonesFindingApiModel } from '@models/spineMRT/api/bones/bones-finding-api.model';

export class BonesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BonesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
