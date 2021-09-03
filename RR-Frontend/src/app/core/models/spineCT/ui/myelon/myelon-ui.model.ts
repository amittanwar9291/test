import { ReportModelBase } from '@models/report-model-base';
import { MyelonFindingUiModel } from '@models/spineCT/ui/myelon/myelon-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { MyelonSpinalCanalAreFindings } from '@enums/spineCT/myelon/myelon-spinal-canal-are-findings';

export class MyelonUiModel extends ReportModelBase {
  areFindings: MyelonSpinalCanalAreFindings;
  findings: MyelonFindingUiModel[];
  constructor() {
    super();
    this.areFindings = MyelonSpinalCanalAreFindings.None;
    this.findings = [new MyelonFindingUiModel()];
  }
}
