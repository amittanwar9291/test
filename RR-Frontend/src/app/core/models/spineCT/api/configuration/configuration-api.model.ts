import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { ConfigurationFindingApiModel } from '@models/spineCT/api/configuration/configuration-finding-api.model';

export class ConfigurationApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: ConfigurationFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new ConfigurationFindingApiModel()];
  }
}
