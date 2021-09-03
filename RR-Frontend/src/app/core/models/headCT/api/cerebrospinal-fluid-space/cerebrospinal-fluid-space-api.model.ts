import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CerebrospinalFluidSpaceFindingApiModel } from '@models/headCT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-api.model';

export class CerebrospinalFluidSpaceApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CerebrospinalFluidSpaceFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CerebrospinalFluidSpaceFindingApiModel()];
  }
}
