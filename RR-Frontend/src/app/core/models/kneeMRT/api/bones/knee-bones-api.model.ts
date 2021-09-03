import { ReportModelBase } from '@models/report-model-base';
import { KneeBonesFindingApiModel } from '@models/kneeMRT/api/bones/knee-bones-finding-api.model';

export class KneeBonesApiModel extends ReportModelBase {
  areFindings: string;
  findings: KneeBonesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [];
  }
}
