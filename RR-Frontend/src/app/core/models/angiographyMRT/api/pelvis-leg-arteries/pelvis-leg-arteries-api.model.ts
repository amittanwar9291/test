import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { PelvisLegArteriesFindingApiModel } from '@models/angiographyMRT/api/pelvis-leg-arteries/pelvis-leg-arteries-finding-api.model';
import { ReportModelBase } from '@models/report-model-base';

export class PelvisLegArteriesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PelvisLegArteriesFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
