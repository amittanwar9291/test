import { ReportModelBase } from '@models/report-model-base';
import { BonesFindingApiModel } from '@models/handMRT/api/bones/bones-finding-api.model';

export class BonesApiModel extends ReportModelBase {
  findings: BonesFindingApiModel[];
  areFindings: string;

  constructor() {
    super();
    this.findings = [new BonesFindingApiModel()];
    this.areFindings = 'None';
  }
}
