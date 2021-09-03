import { ReportModelBase } from '@models/report-model-base';
import { MaleSexFindingApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MaleSexApiModel extends ReportModelBase {
  findings: MaleSexFindingApiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();
    this.findings = [new MaleSexFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
