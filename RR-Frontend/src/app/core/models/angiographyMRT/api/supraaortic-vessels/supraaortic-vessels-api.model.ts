import { ReportModelBase } from '@models/report-model-base';
import { SupraaorticVesselsFindingApi } from '@models/angiographyMRT/api/supraaortic-vessels/supraaortic-vessels-finding-api.model';

export class SupraaorticVesselsApiModel extends ReportModelBase {
  areFindings: string;
  findings: SupraaorticVesselsFindingApi[];
  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new SupraaorticVesselsFindingApi()];
  }
}
