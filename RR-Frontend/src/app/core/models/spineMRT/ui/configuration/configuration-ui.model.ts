import { ReportModelBase } from '@models/report-model-base';
import { ConfigurationFindingUiModel } from './configuration-finding-ui.model';

export class ConfigurationUiModel extends ReportModelBase {
  areFindings: string;
  findings: ConfigurationFindingUiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new ConfigurationFindingUiModel()];
  }
}
