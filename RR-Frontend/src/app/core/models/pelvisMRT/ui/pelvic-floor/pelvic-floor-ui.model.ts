import { ReportModelBase } from '@models/report-model-base';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { PelvicFloorAreFindingsEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-are-findings.enum';

export class PelvicFloorUiModel extends ReportModelBase {
  areFindings: PelvicFloorAreFindingsEnum;
  findings: PelvicFloorFindingUiModel[];

  constructor() {
    super();

    this.areFindings = PelvicFloorAreFindingsEnum.None;
    this.findings = [new PelvicFloorFindingUiModel()];
  }
}
