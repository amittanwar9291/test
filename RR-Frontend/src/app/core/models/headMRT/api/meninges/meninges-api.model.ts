import { ReportModelBase } from '@models/report-model-base';
import { MeningesAreFindingsEnum } from '@enums/headMRT/meninges';
import { MeningesFindingApiModel } from '@models/headMRT/api/meninges/meninges-finding-api.model';

export class MeningesApiModel extends ReportModelBase {
  areFindings: MeningesAreFindingsEnum;
  findings: MeningesFindingApiModel[];

  constructor() {
    super();
    this.areFindings = MeningesAreFindingsEnum.None;
    this.findings = [new MeningesFindingApiModel()];
  }
}
