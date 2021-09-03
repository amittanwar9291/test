import { ReportModelBase } from '@models/report-model-base';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { AreFindingsEnum } from '@enums/abdomenMRT/peritoneal-cavity';

export class PeritonealCavityUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PeritonealCavityFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PeritonealCavityFindingUiModel()];
  }
}
