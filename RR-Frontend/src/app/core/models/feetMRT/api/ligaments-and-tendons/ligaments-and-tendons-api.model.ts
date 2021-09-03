import { ReportModelBase } from '@models/report-model-base';
import { LigamentsAndTendonsFindingApiModel } from '@models/feetMRT/api/ligaments-and-tendons/ligaments-and-tendons-finding-api.model';

export class LigamentsAndTendonsApiModel extends ReportModelBase {
  areFindings: string;
  findings: LigamentsAndTendonsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new LigamentsAndTendonsFindingApiModel()];
  }
}
