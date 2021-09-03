import { ReportModelBase } from '@models/report-model-base';
import { SoftTissueFindingApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-finding-api.model';

export class SoftTissueApiModel extends ReportModelBase {
  areFindings: string;
  findings: SoftTissueFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [];
  }
}
