import { ReportModelBase } from '@models/report-model-base';
import { SupraaorticVesselsFindingApiModel } from '@models/angiographyCT/api/supraaortic-vessels/supraaortic-vessels-finding-api.model';

export class SupraaorticVesselsApiModel extends ReportModelBase {
  areFindings: string;
  findings: SupraaorticVesselsFindingApiModel[];
  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new SupraaorticVesselsFindingApiModel()];
  }
}
