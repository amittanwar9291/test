import { CerebrospinalAreFindings } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { CerebrospinalFluidSpaceFindingUiModel } from './cerebrospinal-fluid-space-finding-ui.model';

export class CerebrospinalFluidSpaceUiModel extends ReportModelBase {
  areFindings: CerebrospinalAreFindings;
  findings: CerebrospinalFluidSpaceFindingUiModel[];

  constructor() {
    super();
    this.areFindings = CerebrospinalAreFindings.None;
    this.findings = [new CerebrospinalFluidSpaceFindingUiModel()];
  }
}
