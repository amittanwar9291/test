import { ReportModelBase } from '@models/report-model-base';
import { SpatialRequirementFindingApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SpatialRequirementApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SpatialRequirementFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
