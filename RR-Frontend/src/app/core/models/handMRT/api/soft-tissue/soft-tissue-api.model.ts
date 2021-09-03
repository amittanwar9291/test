import { ReportModelBase } from '@models/report-model-base';
import { SoftTissueFindingApiModel } from '@models/handMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SoftTissueApiModel extends ReportModelBase {
  findings: SoftTissueFindingApiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();
    this.findings = [new SoftTissueFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
