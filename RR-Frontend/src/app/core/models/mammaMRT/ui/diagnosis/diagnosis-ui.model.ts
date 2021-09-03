import { ReportModelBase } from '@models/report-model-base';

import { DiagnosisFindingUiModel } from './diagnosis-finding-ui.model';

export class DiagnosisUiModel extends ReportModelBase {
  areFindings: string;
  findings: DiagnosisFindingUiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new DiagnosisFindingUiModel()];
  }
}
