import { ReportModelBase } from '@models/report-model-base';
import { BonesFindingApiModel } from '@models/spineCT/api/bones/bones-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class BonesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BonesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new BonesFindingApiModel()];
  }
}
