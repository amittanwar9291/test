import { ReportModelBase } from '@models/report-model-base';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SoftTissueUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftTissueFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftTissueFindingUiModel()];
  }
}
