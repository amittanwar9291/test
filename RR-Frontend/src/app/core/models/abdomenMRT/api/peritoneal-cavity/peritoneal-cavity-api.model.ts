import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { PeritonealCavityFindingApiModel } from '@models/abdomenMRT/api/peritoneal-cavity/peritoneal-cavity-finding-api.model';

export class PeritonealCavityApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PeritonealCavityFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
