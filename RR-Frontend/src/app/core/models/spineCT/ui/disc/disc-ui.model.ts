import { ReportModelBase } from '@models/report-model-base';
import { DiscFindingUiModel } from '@models/spineCT/ui/disc/disc-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class DiscUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: DiscFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new DiscFindingUiModel()];
  }
}
