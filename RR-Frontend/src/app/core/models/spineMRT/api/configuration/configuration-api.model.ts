import { ReportModelBase } from '@models/report-model-base';
import { ConfigurationFindingApiModel } from '@models/spineMRT/api/configuration/configuration-finding-api.model';

export class ConfigurationApiModel extends ReportModelBase {
  areFindings: string;
  findings: ConfigurationFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'none';
    this.findings = [];
  }
}
