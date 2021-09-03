import { ReportModelBase } from '@models/report-model-base';
import { RectumFindingApiModel } from './rectum-finding-api.model';

export class RectumApiModel extends ReportModelBase {
  findings: RectumFindingApiModel[];
  areFindings: string;

  constructor() {
    super();

    this.findings = [new RectumFindingApiModel()];
    this.areFindings = 'None';
  }
}
