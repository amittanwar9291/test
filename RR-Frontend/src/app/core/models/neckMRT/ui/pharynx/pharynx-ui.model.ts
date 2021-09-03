import { ReportModelBase } from '@models/report-model-base';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class PharynxUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PharynxFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PharynxFindingUiModel()];
  }
}
