import { ReportModelBase } from '@models/report-model-base';
import { CortexFindingUiModel } from '@models//headCT/ui/cortex/cortex-finding-ui-model';
import { CortexAreFindingsEnum } from '@enums/shared/head/cortex';

export class CortexUiModel extends ReportModelBase {
  areFindings: CortexAreFindingsEnum;
  findings: CortexFindingUiModel[];
  constructor() {
    super();
    this.areFindings = CortexAreFindingsEnum.None;
    this.findings = [new CortexFindingUiModel()];
  }
}
