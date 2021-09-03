import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SpleenFindingApiModel } from '@models/abdomenMRT/api/spleen/spleen-finding-api.model';
import { ReportModelBase } from '@models/report-model-base';

export class SpleenApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SpleenFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
