import { ReportModelBase } from '@models/report-model-base';
import { DiscFindingApiModel } from './disc-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class DiscApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: DiscFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
