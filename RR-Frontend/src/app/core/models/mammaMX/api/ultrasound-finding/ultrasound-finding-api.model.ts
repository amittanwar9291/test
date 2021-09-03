import { ReportModelBase } from '@models/report-model-base';
import { UltrasoundFindingSubfindingApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-subfinding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class UltrasoundFindingApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: UltrasoundFindingSubfindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
