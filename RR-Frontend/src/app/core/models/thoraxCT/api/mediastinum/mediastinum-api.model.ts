import { ReportModelBase } from '@models/report-model-base';
import { MediastinumFindingApiModel } from '@models/thoraxCT/api/mediastinum/mediastinum-finding-api.model';

export class MediastinumApiModel extends ReportModelBase {
  areFindings: string;
  findings: MediastinumFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [];
  }
}
