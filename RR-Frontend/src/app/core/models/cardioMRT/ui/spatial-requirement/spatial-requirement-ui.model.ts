import { ReportModelBase } from '@models/report-model-base';
import { SpatialRequirementFindingUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SpatialRequirementUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SpatialRequirementFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SpatialRequirementFindingUiModel()];
  }
}
