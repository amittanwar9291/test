import { ReportModelBase } from '@models/report-model-base';
import { SoftPartsFindingApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-finding-api.model';

export class SoftPartsApiModel extends ReportModelBase {
  areFindings: string;
  findings: SoftPartsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [];
  }
}
