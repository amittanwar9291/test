import { ReportModelBase } from '@models/report-model-base';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SoftTissueUiModel extends ReportModelBase {
  findings: SoftTissueFindingUiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();
    this.findings = [new SoftTissueFindingUiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
