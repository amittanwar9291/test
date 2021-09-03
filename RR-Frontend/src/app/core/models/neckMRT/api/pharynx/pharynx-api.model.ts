import { ReportModelBase } from '@models/report-model-base';
import { PharynxFindingApiModel } from '@models/neckMRT/api/pharynx/pharynx-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class PharynxApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PharynxFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
