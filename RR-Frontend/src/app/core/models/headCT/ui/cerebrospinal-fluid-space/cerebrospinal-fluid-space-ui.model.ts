import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';

export class CerebrospinalFluidSpaceUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CerebrospinalFluidSpaceFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CerebrospinalFluidSpaceFindingUiModel()];
  }
}
