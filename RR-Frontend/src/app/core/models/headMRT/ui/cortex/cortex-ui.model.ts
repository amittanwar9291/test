import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CortexFindingUiModel } from '@models//headMRT/ui/cortex/cortex-finding-ui.model';

export class CortexUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CortexFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CortexFindingUiModel()];
  }
}
