import { KidneysFindingApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-finding-api.model';
import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/abdomenMRT/kidneys/';

export class KidneysApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: KidneysFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
