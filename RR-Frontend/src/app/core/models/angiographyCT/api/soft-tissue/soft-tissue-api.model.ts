import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SoftTissueFindingApiModel } from '@models/angiographyCT/api/soft-tissue/soft-tissue-finding-api.model';

export class SoftTissueApiModel extends ReportModelBase {
  findings: SoftTissueFindingApiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();
    this.findings = [new SoftTissueFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
