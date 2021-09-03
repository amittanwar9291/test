import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

export class PelvisLegArteriesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PelvisLegArteriesFindingUiModel[];
  isNoMorePathologies: boolean;

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PelvisLegArteriesFindingUiModel()];
    this.isNoMorePathologies = false;
  }
}
