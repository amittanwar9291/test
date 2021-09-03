import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { ReportModelBase } from '@models/report-model-base';

export class VesselsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: VesselsFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new VesselsFindingUiModel()];
  }
}
