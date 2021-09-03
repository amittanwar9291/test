import { ReportModelBase } from '@models/report-model-base';
import { FemaleSexFindingApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class FemaleSexApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: FemaleSexFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new FemaleSexFindingApiModel()];
  }
}
