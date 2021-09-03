import { ReportModelBase } from '@models/report-model-base';
import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class UltrasoundFindingUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: UltrasoundFindingSubfindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new UltrasoundFindingSubfindingUiModel()];
  }
}
