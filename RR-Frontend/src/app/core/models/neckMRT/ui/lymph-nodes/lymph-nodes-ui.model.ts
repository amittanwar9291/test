import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LymphNodesFindingUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';

export class LymphNodesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LymphNodesFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LymphNodesFindingUiModel()];
  }
}
