import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { PelvisLegArteriesFindingApiModel } from '@models/angiographyCT/api/pelvis-leg-arteries/pelvis-leg-arteries-finding-api.model';

export class PelvisLegArteriesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PelvisLegArteriesFindingApiModel[];
  isNoMorePathologies: boolean;

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
    this.isNoMorePathologies = false;
  }
}
