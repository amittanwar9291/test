import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { ReportModelBase } from '@models/report-model-base';

export class SpleenUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SpleenFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SpleenFindingUiModel()];
  }
}
