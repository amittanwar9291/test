import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesFindingApiModel } from '@models/elbowMRT/api/bones/bones-finding-api.model';
import { ReportModelBase } from '@models/report-model-base';

export class BonesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BonesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
