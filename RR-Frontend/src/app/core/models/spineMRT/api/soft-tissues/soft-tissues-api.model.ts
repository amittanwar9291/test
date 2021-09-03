import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { SoftTissuesFindingApiModel } from '@models/spineMRT/api/soft-tissues/soft-tissues-finding-api.model';

export class SoftTissuesApiModel extends ReportModelBase {
  findings: SoftTissuesFindingApiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();

    this.findings = [new SoftTissuesFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
