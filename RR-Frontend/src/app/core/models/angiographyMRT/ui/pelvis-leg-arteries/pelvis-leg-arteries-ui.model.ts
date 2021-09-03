import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { ReportModelBase } from '@models/report-model-base';

export class PelvisLegArteriesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PelvisLegArteriesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PelvisLegArteriesFindingUiModel()];
  }
}
