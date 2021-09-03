import { ReportModelBase } from '@models/report-model-base';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

export class SoftTissueUiModel extends ReportModelBase {
  areFindings: string;
  findings: SoftTissueFindingUiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new SoftTissueFindingUiModel()];
  }
}
