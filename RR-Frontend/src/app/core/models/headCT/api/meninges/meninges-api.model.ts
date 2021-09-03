import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { MeningesFindingApiModel } from '@models/headCT/api/meninges/meninges-finding-api.model';

export class MeningesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MeningesFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MeningesFindingApiModel()];
  }
}
