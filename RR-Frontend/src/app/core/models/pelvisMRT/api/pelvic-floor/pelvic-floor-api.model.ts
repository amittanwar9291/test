import { ReportModelBase } from '@models/report-model-base';
import { PelvicFloorFindingApiModel } from '@models/pelvisMRT/api/pelvic-floor/pelvic-floor-finding-api.model';
import { PelvicFloorAreFindingsEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-are-findings.enum';

export class PelvicFloorApiModel extends ReportModelBase {
  areFindings: PelvicFloorAreFindingsEnum;
  findings: PelvicFloorFindingApiModel[];

  constructor() {
    super();

    this.areFindings = PelvicFloorAreFindingsEnum.None;
    this.findings = [new PelvicFloorFindingApiModel()];
  }
}
