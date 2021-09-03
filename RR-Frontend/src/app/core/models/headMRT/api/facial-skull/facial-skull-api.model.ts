import { ReportModelBase } from '@models/report-model-base';
import { FacialSkullAreFindingsEnum } from '@enums/headMRT/facial-skull/facial-skull-are-findings.enum';
import { FacialSkullFindingApiModel } from '@models/headMRT/api/facial-skull/facial-skull-finding-api.model';

export class FacialSkullApiModel extends ReportModelBase {
  areFindings: FacialSkullAreFindingsEnum;
  findings: FacialSkullFindingApiModel[];

  constructor() {
    super();
    this.areFindings = FacialSkullAreFindingsEnum.None;
    this.findings = [new FacialSkullFindingApiModel()];
  }
}
