import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';

export class VesselsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: VesselsFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new VesselsFindingUiModel()];
  }
}
