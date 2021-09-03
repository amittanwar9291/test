import { ReportModelBase } from '@models/report-model-base';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { FacialSkullAreFindingsEnum } from '@enums/headMRT/facial-skull/facial-skull-are-findings.enum';

export class FacialSkullUiModel extends ReportModelBase {
  areFindings: FacialSkullAreFindingsEnum;
  findings: FacialSkullFindingUiModel[];

  constructor() {
    super();
    this.areFindings = FacialSkullAreFindingsEnum.None;
    this.findings = [new FacialSkullFindingUiModel()];
  }
}
