import { CerebrospinalAreFindings } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { CerebrospinalFluidSpaceFindingApiModel } from './cerebrospinal-fluid-space-finding-api.model';

export class CerebrospinalFluidSpaceApiModel extends ReportModelBase {
  areFindings: CerebrospinalAreFindings;
  findings: CerebrospinalFluidSpaceFindingApiModel[];

  constructor() {
    super();
    this.areFindings = CerebrospinalAreFindings.None;
    this.findings = [new CerebrospinalFluidSpaceFindingApiModel()];
  }
}
