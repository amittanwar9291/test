import { ReportModelBase } from '@models/report-model-base';
import { TendinopathyFindingApiModel } from '@models/handMRT/api/tendinopathy/tendinopathy-finding-api.model';

export class TendinopathyApiModel extends ReportModelBase {
  findings: TendinopathyFindingApiModel[];
  areFindings: string;

  constructor() {
    super();
    this.findings = [new TendinopathyFindingApiModel()];
    this.areFindings = 'None';
  }
}
