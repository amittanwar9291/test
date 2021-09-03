import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/abdomenMRT/kidneys/';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';

export class KidneysUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: KidneysFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new KidneysFindingUiModel()];
  }
}
