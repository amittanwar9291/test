import { ReportModelBase } from '@models/report-model-base';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';

export class TendinopathyUiModel extends ReportModelBase {
  findings: TendinopathyFindingUiModel[];
  areFindings: string;

  constructor() {
    super();
    this.findings = [new TendinopathyFindingUiModel()];
    this.areFindings = 'None';
  }
}
