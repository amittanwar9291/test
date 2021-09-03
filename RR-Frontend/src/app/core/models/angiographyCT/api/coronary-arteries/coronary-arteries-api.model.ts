import { ReportModelBase } from '@models/report-model-base';
import { CoronaryArteriesFindingApiModel } from '@models/angiographyCT/api/coronary-arteries/coronary-arteries-finding-api.model';

export class CoronaryArteriesApiModel extends ReportModelBase {
  areFindings: string;
  findings: CoronaryArteriesFindingApiModel[];
  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new CoronaryArteriesFindingApiModel()];
  }
}
