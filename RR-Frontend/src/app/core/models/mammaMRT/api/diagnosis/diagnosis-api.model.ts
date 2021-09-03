import { ReportModelBase } from '@models/report-model-base';

import { DiagnosisFindingApiModel } from './diagnosis-finding-api.model';

export class DiagnosisApiModel extends ReportModelBase {
  areFindings: string;
  findings: DiagnosisFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new DiagnosisFindingApiModel()];
  }
}
