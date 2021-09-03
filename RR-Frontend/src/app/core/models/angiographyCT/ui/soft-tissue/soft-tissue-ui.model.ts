import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';

export class SoftTissueUiModel extends ReportModelBase {
  findings: SoftTissueFindingUiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();
    this.findings = [new SoftTissueFindingUiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
