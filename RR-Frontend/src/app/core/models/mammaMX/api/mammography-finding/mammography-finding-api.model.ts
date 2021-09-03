import { ReportModelBase } from '@models/report-model-base';
import { MammographyFindingFindingApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MammographyFindingApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MammographyFindingFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
