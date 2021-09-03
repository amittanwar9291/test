import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';

export class ConfigurationUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: ConfigurationFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new ConfigurationFindingUiModel()];
  }
}
